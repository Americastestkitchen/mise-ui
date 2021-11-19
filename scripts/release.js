#!/usr/bin/env node

const { warn, success } = require('./_util');
const {
  execCopyFiles,
  execCompile,
  execValidate,
  execAutoVersion,
  execPublish,
  execBumpVersion,
  execClean,
} = require('./_exec');

(async () => {
  await execClean();
  await execValidate();
  const version = await execAutoVersion();
  if (!version) {
    warn('no version to release');
    return;
  }
  await execBumpVersion(version);
  await execCompile();
  await execCopyFiles();
  await execPublish();
  success('release success');
})();
