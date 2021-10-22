// jest.config.js

/** @type {import('@jest/types').Config.InitialOptions} */
const path = require('path')

const config = {
  displayName: 'training',
  automock: false, // if true, it might mock Jest's own dependencies.
  displayName: 'training', // label to be printed alongside a test while it is running.
  bail: true, // stop as soon as a fail is found.
  verbose: false,
  testEnvironment: 'jsdom', // browser testing
  testPathIgnorePatterns: ['/node_modules/'],
  testURL: 'http://localhost:8080',
  collectCoverage: false,
  collectCoverageFrom: ['./src/**/*.js'],
  coverageProvider: 'babel',
  coverageReporters: ['text', 'json'], // clover, json, lcov and text
  coverageDirectory: path.resolve(__dirname, '__tests__/coverage'),
  coveragePathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['jest-extended/all'],
}

module.exports = config
