#!/usr/bin/env node

const { success } = require('./_util');
const { execValidate } = require('./_exec');

(async () => {
  await execValidate();
  success('linting and tests successful');
})();
