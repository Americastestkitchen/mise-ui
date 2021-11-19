/* eslint-disable import/no-extraneous-dependencies */

const { dirname, join, resolve } = require('path');
const { sync: globSync } = require('fast-glob');
const {
  execLog,
  info,
  success,
  readJSON,
  writeJSON,
  forEach,
} = require('./_util');

module.exports.execAutoVersion = async () => {
  info('fetching version');
  const { stdout: versionLineBreak } = await execLog(
    'auto version --only-publish-with-release-label',
  );
  return versionLineBreak?.trim();
};

module.exports.execClean = async () => {
  info('cleaing dist folder');
  await execLog('rimraf dist');
};

module.exports.execValidate = async () => {
  info('running yarn lint');
  await execLog('yarn lint');
  info('running yarn test');
  await execLog('yarn test --color');
};

module.exports.execBumpVersion = async (version) => {
  info('updating changelog');
  await execLog('auto changelog');
  info(`updating package version by (${version})`);
  await execLog(`yarn version --${version}`);
};

module.exports.execCompile = async (development = false) => {
  info('running babel compiler');
  const env = {
    NODE_ENV: development ? 'development' : 'production',
    BABEL_ENV: development ? 'development' : 'production',
  };
  const babelConfigPath = resolve(development ? 'scripts/dev.babelrc' : '.babelrc');
  const srcDir = resolve('./src');
  const extensions = ['.js', '.jsx', '.ts', '.tsx'].join(',');
  const ignore = [
    '**/*.test.js',
    '**/*.stories.js',
    '**/*.stories.ts',
    '**/*.stories.tsx',
    '**/*.test.js',
    '**/*.test.ts',
    '**/*.test.tsx',
    '**/*.spec.js',
    '**/*.spec.ts',
    '**/*.spec.tsx',
    '**/*.d.ts',
    'src/setupTests.js',
  ].join('","');

  const args = `--config-file ${babelConfigPath} --extensions "${extensions}" ${srcDir} --out-dir ./dist --ignore "${ignore}"`;

  await execLog(`yarn babel ${args}`, { env: { ...process.env, ...env } });
  info('running typescript compiler');
  await execLog('tsc');
};

const addModulePackages = async (globPath) => {
  const glob = `${globPath}/index.{js,jsx,ts,tsx}`;
  info(`adding package.json in modules matching ${glob}`);
  await forEach(
    globSync(glob, {
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
};

module.exports.execCopyFiles = async () => {
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
  await addModulePackages('*');
  await addModulePackages('components/*');
  await addModulePackages('components/Cards/*');
  await addModulePackages('components/Cards/shared/*');
  await addModulePackages('components/Ads/*');
  await addModulePackages('components/Ads/ReviewsAds/*');
  await addModulePackages('components/Carousels/*');
};

module.exports.execPublish = async () => {
  const tag = 'latest';
  info(`publishing with tag of (${tag})`);
  await execLog(`yarn publish dist --tag ${tag}`);
  info('pushing changelog and tags to remote origin master');
  await execLog('git push --follow-tags --set-upstream origin master');
  info('creating github release for changelog');
  await execLog('auto release');
  const package = await readJSON('./dist/package.json');
  success(`tag ${tag} version ${package.version} deployed!`);
};
