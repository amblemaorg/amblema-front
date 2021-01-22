// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
//const argv = require('minimist')(process.argv.slice(2))
const tags = (process.env.tags !== 'true') && process.env.tags;

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-spec-reporter')
    ],
    files: [
      "https://maps.googleapis.com/maps/api/js?sensor=false",
      "src/assets/tests/mocks/maps.googleapis.com-maps-api.js",
      "src/assets/tests/activated-route-stub.ts",
    ],
    client: {
      args: [tags],
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
      captureConsole: false
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/amblema-web'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    reporters: ['spec', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    // updated
    browsers: ['ChromeHeadless'],
    // new
    customLaunchers: {
      'ChromeHeadless': {
        base: 'Chrome',
        flags: [
          '--no-sandbox',
          '--headless',
          '--disable-gpu',
          '--remote-debugging-port=9222'
        ]
      }
    },
    singleRun: true,
    restartOnFileChange: true,
    captureTimeout: 210000,
    browserDisconnectTolerance: 3,
    browserDisconnectTimeout : 210000,
    browserNoActivityTimeout : 210000,
  });
};
