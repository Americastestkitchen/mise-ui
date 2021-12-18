#!/usr/bin/env node

const { warn, execLog } = require('./_util');

(async () => {
  warn(
    'vscode enable and disable commands are not working',
    'go to extensions and make sure workspace recommended plugins are installed',
  );
  await execLog('code --install-extension styled-components.vscode-styled-components');
  await execLog('code --install-extension editorconfig.editorconfig');
  await execLog('code --install-extension dbaeumer.vscode-eslint');
  await execLog('code --install-extension wix.vscode-import-cost');
})();
