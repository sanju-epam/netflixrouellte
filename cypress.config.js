const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    indexHtmlFile: 'cypress/support/component-index.html',
   
  },
  e2e: {
     baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
     
    },
    
  }
  
});
