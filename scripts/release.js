#!/usr/bin/env node

const childProcess = require('child_process');
const { dirname, join } = require('path');
const { sync: globSync } = require('fast-glob');
const { promisify } = require('util');
const {
  forEach,
  info,
  readJSON,
  writeJSON,
  success,
  warn,
} = require('./_util');
const { execBabel } = require('./_babel');

const exec = promisify(childProcess.exec);

// prerelease | major | minor | patch
const tag = 'testing'; // for testing actions before blowing up npm versions in latest
// const tag = 'latest';

(async () => {
  await exec('yarn lint');
  await exec('yarn test');

  const { stdout: version } = await exec(
    'auto version --only-publish-with-release-label',
  );
  if (!version.trim()) {
    warn('no version to release');
    return 'exited since no version to release';
  }

  info(`auto bumping by (${version.trim()})`);

  info('cleaing dist folder');
  await exec('rimraf dist');

  info('updating changelog');
  await exec('auto changelog');

  info(`updating package version by (${version})`);
  await exec(`yarn version --${version}`);

  info('compiling');
  await execBabel();
  info('compiling typedef');
  await exec('tsc --build tsconfig.json');

  info('coping package file');
  const { scripts, devDependencies, engines, ...pkgToCopy } = await readJSON(
    'package.json',
  );
  const newPackageData = {
    ...pkgToCopy,
    sideEffects: false,
    main: 'index.js',
    types: 'index.d.ts',
  };
  await writeJSON('dist/package.json', newPackageData);

  info('adding package file for folders with index file');
  await forEach(
    globSync('*/index.{js,jsx,ts,tsx}', {
      cwd: 'src',
    }).map(dirname),
    async (directoryPackage) => {
      const packageJsonPath = join('dist', directoryPackage, 'package.json');
      const packageJson = {
        sideEffects: false,
        main: 'index.js',
        types: 'index.d.ts',
      };
      await writeJSON(packageJsonPath, packageJson);
    },
  );

  info('adding package files for modules in components');
  await forEach(
    globSync('components/*/index.{js,jsx,ts,tsx}', {
      cwd: 'src',
    }).map(dirname),
    async (directoryPackage) => {
      const packageJsonPath = join('dist', directoryPackage, 'package.json');
      const packageJson = {
        sideEffects: false,
        main: 'index.js',
        types: 'index.d.ts',
      };
      await writeJSON(packageJsonPath, packageJson);
    },
  );

  success('build ready for release');

  info(`publishing with tag of (${tag})`);
  await exec(`yarn publish dist --tag ${tag}`);

  info('pushing changelog and tags to remote origin master');
  await exec('git push --follow-tags --set-upstream origin master');

  info('creating github release for changelog');
  await exec('auto release');

  const package = await readJSON('./dist/package.json');
  success(`tag ${tag} version ${package.version} deployed!`);
})();

// "publishConfig": {
//   "registry": "https://registry.npmjs.org"
// },
// in package.json instead of in ci?
// registry https://registry.npmjs.org ?
