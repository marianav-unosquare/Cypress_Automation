const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

function getConfigurationByFile(file){
  const pathToConfigFile= path.resolve('cypress\\config', `${json}.json`);
  if(!fs.existsSync(pathToConfigFile)){
    console.log("No custom config file found");
    return{};
  }
  return fs.readJson(pathToConfigFile);
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    excludeSpecPattern:"cypress/e2e/other/*.js",
    //specPattern: "cypress/e2e/cucumber-automation/features/*.feature"
    chromeWebSecurity: false,
    env:{
      webdriveruni_homepage: "https://www.webdriveruniversity.com",
      first_name: "Sarah"
    }
  },
 
});
