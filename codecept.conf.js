const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './test/e2e/*.test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://' + (process.env.APP_NAME || 'localhost') + ':3000/',
      browser: process.env.SELENIUM_BROWSER || 'chrome',
      host: process.env.SELENIUM_HOST || 'localhost',
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
