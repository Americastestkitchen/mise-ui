#!/usr/bin/env node

const { success } = require('./_util');
const {
  execCompile,
  execCopyFiles,
} = require('./_exec');

(async () => {
  await execCompile(true);
  await execCopyFiles();
  success('build success');
})();
