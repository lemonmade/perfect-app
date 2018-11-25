const dotenv = require('dotenv');

dotenv.config();

const path = require('path');
const {ip, port, cdnUrl} = require('./config/server');

const tests = path.join(__dirname, 'tests');

module.exports = function sewingKitConfig(plugins, env) {
  return {
    name: 'your-app-name',
    plugins: [
      plugins.devServer({
        ip,
        port,
      }),
      plugins.cdn(cdnUrl),
      plugins.vendors([
        '@shopify/admin-graphql-api-utilities',
        '@shopify/javascript-utilities',
        '@shopify/koa-shopify-graphql-proxy',
        '@shopify/network',
        '@shopify/polaris',
        '@shopify/react-compose',
        '@shopify/react-effect',
        '@shopify/react-form-state',
        '@shopify/react-html',
        '@shopify/react-i18n',
        '@shopify/react-network',
        '@shopify/react-utilities',
        'apollo-cache-inmemory',
        'apollo-client',
        'apollo-link-http',
        'react',
        'react-apollo',
        'react-dom',
        'react-redux',
        'react-router',
        'react-router-dom',
        'redux',
      ]),
      plugins.jest((config) => {
        config.setupFiles.push(path.join(tests, 'setup.ts'));
        config.setupTestFrameworkScriptFile = path.join(tests, 'each-test.ts');
        config.globals = config.globals || {};
        config.globals['ts-jest'] = config.globals['ts-jest'] || {};
        config.globals['ts-jest'].diagnostics = false;
        config.globals['ts-jest'].isolatedModules = true;
        return config;
      }),
    ],
  };
};
