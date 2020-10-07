const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './test/e2e/*.test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost:3000/',
      browser: 'chrome',
      host: 'chrome-container', // change to localhost to run locally
      port: 4444,
      restart: false
    }
  },
  bootstrap: null,
  mocha: {},
  name: 'photography',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
};
