#!/usr/bin/env node

/**
 * chalk - Terminal Styling, i.e colors etc.
 * figlet - For making large letters out of ordinary text.
 * inquirer - Collects user inputs from the command line.
 * shelljs - Portable Unix shell commands for Node.js
 * yargs - non interactive only?
 */

const childProcess = require('child_process');
const { promisify } = require('util');
const inquirer = require('inquirer');
const exec = promisify(childProcess.exec);

const commands = {
  setup: { name: 'setup vscode workspace', value: 'setup' },
  build: { name: 'build the library', value: 'build' },
  release: { name: 'release to npm', value: 'release' },
};

const argv = require('yargs/yargs')(process.argv.slice(2))
  .usage('Usage: $0 <command> [options]')
  .command(commands.setup.value, commands.setup.name)
  .command(commands.build.value, commands.build.name)
  .command(commands.release.value, commands.release.name)
  .help('h')
  .alias('h', 'help').argv;

(async () => {
  const commandProvided = argv._[0];
  if (commandProvided) {
    const command = exec(`node scripts/${argv._[0]} --color`);
    command.child.stdout.pipe(process.stdout);
    await command;
  } else {
    const response = await inquirer.prompt([
      {
        name: 'command',
        type: 'list',
        choices: Object.values(commands),
      },
    ]);
    const command = exec(`node scripts/${response.command} --color`);
    command.child.stdout.pipe(process.stdout);
    await command;
  }
})().catch((err) => console.log(err));
