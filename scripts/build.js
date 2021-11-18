#!/usr/bin/env node

const childProcess = require('child_process');
const { dirname, join } = require('path');
const { sync: globSync } = require('fast-glob');
const { promisify } = require('util');
const exec = promisify(childProcess.exec);
const { forEach, info, readJSON, writeJSON, success } = require('./_util');
const { execBabel } = require('./_babel');

(async () => {
  info('cleaing dist folder');
  await exec('rimraf dist');

  info('compiling');
  await execBabel();
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

  info('adding package files for components modules');
  await forEach(
    globSync('components/*/index.{js,ts,tsx}', {
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

  info('adding package file for styles module');
  await forEach(
    globSync('styles/index.{js,ts,tsx}', {
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

  success('build success');
})();
