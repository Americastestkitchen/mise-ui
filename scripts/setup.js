#!/usr/bin/env node

const childProcess = require('child_process');
const { promisify } = require('util');
const { warn } = require('./_util');
const exec = promisify(childProcess.exec);

(async () => {
  // await exec("code --disable-extensions");
  warn(
    'vscode enable and disable commands are not working',
    'go to extensions and make sure workspace recommended plugins are installed',
  );
  // await exec('code --install-extension esbenp.prettier-vscode');
  await exec('code --install-extension jpoissonnier.vscode-styled-components');
  await exec('code --install-extension editorconfig.editorconfig');
  await exec('code --install-extension dbaeumer.vscode-eslint');
  await exec('code --install-extension wix.vscode-import-cost');
})().catch((err) => console.log(err));
