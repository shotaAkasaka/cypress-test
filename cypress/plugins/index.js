// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

// module.exports = (on, config) => {
//   // `on` is used to hook into various events Cypress emits
//   // `config` is the resolved Cypress config
// }

module.exports = (on, config) => {
  // create new config settings
  const configOverride = {};
  if (config.env.userAgent === 'mobile') {
      configOverride.userAgent = 'Mozilla/5.0 (Linux; Android 6.0.1; SM-G532G Build/MMB29T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.83 Mobile Safari/537.36';
      configOverride.testFiles = 'mobile/**/*.*';
  } else if (config.env.userAgent === 'tablet') {
      configOverride.userAgent = 'Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B334b Safari/531.21.10';
      configOverride.testFiles = 'tablet/**/*.*';
  } else {
      configOverride.userAgent = 'none';
  }

  return Object.assign({}, config, configOverride);
};