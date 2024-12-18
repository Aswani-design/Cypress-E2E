const { defineConfig } = require("cypress");


module.exports = defineConfig({

   e2e: {
    
    baseUrl: 'https://tutorialsninja.com/demo/index.php?route=account/login',

    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports/mochawesome', // Report directory
      overwrite: false,                        // Append new reports
      html: true,                              // Generate HTML report
      json: true,                              // Generate JSON report
      charts: true                             // Add charts to the report
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },


  env: {
      URL:'https://tutorialsninja.com/demo/index.php?route=account/register'
  },

 
});
