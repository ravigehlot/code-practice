// jest.config.js
// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const path = require('path')

const config = {
  displayName: 'training', // label to be printed alongside a test while it is running.
  bail: 0, // stop as soon as a fail is found.
  verbose: false,
  testEnvironment: 'jsdom', // browser testing
  testPathIgnorePatterns: ['/node_modules/'],
  testURL: 'http://localhost:8080',
  collectCoverage: false,
  collectCoverageFrom: ['./src/**/*.js'],
  coverageProvider: 'babel',
  coverageReporters: ['text', 'json'], // clover, json, lcov and text
  coverageDirectory: path.resolve(__dirname, 'tests/coverage'),
  coveragePathIgnorePatterns: ['/node_modules/'],
  setupFiles: [path.resolve(__dirname, 'tests/mocks/browser.js')],
}

module.exports = config
