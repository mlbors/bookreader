var SpecReporter = require('jasmine-spec-reporter').SpecReporter;

var buildNumber = 'travis-build#'+process.env.TRAVIS_BUILD_NUMBER;

exports.config = {
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,
  allScriptsTimeout: 21000,
  specs: [
    '../dist/out-tsc-e2e/**/*.e2e-spec.js',
    '../dist/out-tsc-e2e/**/*.po.js'
  ],
  multiCapabilities: [
    {
      browserName: 'safari',
      platform: 'macOS 10.12',
      name: "safari-osx-tests",
      shardTestFiles: true,
      maxInstances: 5
    },
    {
      browserName: 'chrome',
      platform: 'Linux',
      name: "chrome-linux-tests",
      shardTestFiles: true,
      maxInstances: 5
    },
    {
      browserName: 'firefox',
      platform: 'Linux',
      name: "firefox-linux-tests",
      shardTestFiles: true,
      maxInstances: 5
    },
    {
      browserName: 'internet explorer',
      platform: 'Windows 10',
      name: "ie-latest-windows-tests",
      shardTestFiles: true,
      maxInstances: 5
    },
  ],
  sauceBuild: buildNumber,
  directConnect: false,
  baseUrl: 'https://github.com/mlbors/bookreader',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  useAllAngular2AppRoots: true,
  beforeLaunch: function() {
    require('ts-node').register({
      project: 'e2e'
    });
  },
  onPrepare: function() {
    jasmine.getEnv().addReporter(new SpecReporter());
  }
};