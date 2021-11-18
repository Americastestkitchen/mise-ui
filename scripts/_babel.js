const childProcess = require('child_process');
const { promisify } = require('util');
const { resolve } = require('path');

const exec = promisify(childProcess.exec);

module.exports.execBabel = async function execBabel() {
  const env = {
    NODE_ENV: 'production',
    BABEL_ENV: 'production',
  };
  const babelConfigPath = resolve('.babelrc');
  const srcDir = resolve('./src');
  const extensions = ['.js', '.jsx', '.ts', '.tsx'].join(',');
  const ignore = [
    '**/*.test.js',
    '**/*.stories.js',
    '**/*.test.ts',
    '**/*.test.tsx',
    '**/*.spec.js',
    '**/*.spec.ts',
    '**/*.spec.tsx',
    '**/*.d.ts',
    'src/setupTests.js',
  ].join('","');

  const args = `--config-file ${babelConfigPath} --extensions "${extensions}" ${srcDir} --out-dir ./dist --ignore "${ignore}"`;

  await exec(`yarn babel ${args}`, { env: { ...process.env, ...env } });
};
