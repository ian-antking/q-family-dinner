module.exports = {
  env: {
    node: true,
  },
  extends: [
    './rules/babel',
    './rules/best-practices',
    './rules/errors',
    './rules/es6',
    './rules/import',
    './rules/node',
    './rules/strict',
    './rules/style',
    './rules/variables',
  ].map(require.resolve),
  overrides: [
    {
      files: [
        '**/*.test.js',
        '**/*.spec.js',
        '**/*.test.jsx',
        '**/*.spec.jsx',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
