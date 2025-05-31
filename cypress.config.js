const { defineConfig } = require('cypress');
const fs = require('fs');

function getConfigurationByFile(file) {
  const pathToConfigFile = `cypress.env.${file}.json`;

  if (!fs.existsSync(pathToConfigFile)) {
    throw new Error(`Config file ${pathToConfigFile} not found`);
  }

  return JSON.parse(fs.readFileSync(pathToConfigFile, 'utf-8'));
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const file = config.env.configFile || 'v1';
      const envConfig = getConfigurationByFile(file);

      config.baseUrl = envConfig.baseUrl;

      config.env = { ...config.env, ...envConfig };

      return config;
    },
  },
});
