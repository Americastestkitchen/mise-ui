#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */

const inquirer = require('inquirer');
const yargs = require('yargs/yargs');
const { execLog } = require('./_util');

const commands = {
  setup: { name: 'setup vscode workspace', value: 'setup' },
  build: { name: 'build the library', value: 'build' },
  release: { name: 'release to npm', value: 'release' },
  validate: { name: 'test and lint', value: 'validate' },
};

const choices = Object.values(commands);
const prompt = [{ name: 'command', type: 'list', choices }];

const argv = yargs(process.argv.slice(2))
  .usage('Usage: $0 <command> [options]')
  .command(commands.setup.value, commands.setup.name)
  .command(commands.build.value, commands.build.name)
  .command(commands.release.value, commands.release.name)
  .command(commands.validate.value, commands.validate.name)
  .help('h')
  .alias('h', 'help').argv;

const [commandProvided] = argv._;

(async () => {
  if (commandProvided) {
    await execLog(`node scripts/${commandProvided} --color`);
    return;
  }
  const response = await inquirer.prompt(prompt);
  await execLog(`node scripts/${response.command} --color`);
})();
