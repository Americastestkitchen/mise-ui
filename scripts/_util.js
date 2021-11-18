const { writeFile, readFile } = require('fs-extra');
const chalk = require('chalk');

module.exports.info = (...args) => console.log(chalk.blue(...args));
module.exports.warn = (...args) => console.log(chalk.yellow('!', ...args));
module.exports.error = (...args) => console.log(chalk.red('𐄂', ...args));
module.exports.success = (...args) => console.log(chalk.green('✓', ...args));

module.exports.writeJSON = (file, data) =>
  writeFile(file, JSON.stringify(data, null, 2), 'utf8');

module.exports.readJSON = (file) =>
  readFile(file, 'utf8').then((data) => JSON.parse(data));

module.exports.forEach = (each, asyncCallback) =>
  Promise.all(each.map((v) => asyncCallback(v)));
