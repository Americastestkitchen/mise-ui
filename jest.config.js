module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/storybook-static/',
    '<rootDir>/.storybook/',
    '.*/data.js',
  ],
};
