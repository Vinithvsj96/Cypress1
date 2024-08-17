const { defineConfig } = require("cypress");
const fs = require("fs");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task',{
        writeFile({path,content}){
          fs.writeFileSync(path,content);
          return null;
        }
      })
      // implement node event listeners here
    },
    specPattern:'cypress/support/APITesting'
  },
});
