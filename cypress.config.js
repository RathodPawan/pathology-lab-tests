const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://gor-pathology.web.app',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000, // Increase timeout to 10 seconds
    retries: {
      runMode: 2, // Retry failed tests in run mode
      openMode: 0, // Do not retry in open mode
    },
    reporter: 'mochawesome', // Optional: Generates a nice HTML report after test execution

    setupNodeEvents(on, config) {
      // You can implement custom node event listeners here, if needed
    },
  },
});
