module.exports = {
  extends: [
    'plugin:shopify/typescript-react',
    'plugin:shopify/typescript-prettier',
    'plugin:shopify/polaris',
    'plugin:shopify/jest',
  ],
  rules: {
    'react/jsx-no-bind': 'off',
  },
  overrides: [
    {
      files: ['*.test.*'],
      rules: {
        'shopify/jsx-no-hardcoded-content': 'off',
      },
    },
  ],
};
