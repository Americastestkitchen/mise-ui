/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */

const { writeFile, readFile } = require('fs-extra');
const chalk = require('chalk');
const childProcess = require('child_process');
const { promisify } = require('util');

const exec = promisify(childProcess.exec);

module.exports.info = (...args) => console.log(chalk.blue(...args));
module.exports.warn = (...args) => console.log(chalk.yellow('!', ...args));
module.exports.error = (...args) => console.log(chalk.red('𐄂', ...args));
module.exports.success = (...args) => console.log(chalk.green('✓', ...args));

module.exports.writeJSON = (file, data) => writeFile(file, JSON.stringify(data, null, 2), 'utf8');

module.exports.readJSON = file => readFile(file, 'utf8').then(data => JSON.parse(data));

module.exports.forEach = (each, asyncCallback) => Promise.all(each.map(v => asyncCallback(v)));

module.exports.execLog = (...args) => {
  const cmd = exec(...args);
  cmd.child.stdout.pipe(process.stdout);
  cmd.child.stderr.pipe(process.stderr);
  return cmd;
};
