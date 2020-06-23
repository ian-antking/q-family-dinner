module.exports = {
  parser: 'babel-eslint',
  plugins: [
    'babel',
  ],
  rules: {
    // require a capital letter for constructors
    'babel/new-cap': ['error', {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
    }],
    // disallow this keywords outside of classes or class-like objects
    'babel/no-invalid-this': 'off',
    // disallow usage of expressions in statement position
    'babel/no-unused-expressions': ['error'],
    // require padding inside curly braces
    'babel/object-curly-spacing': ['error', 'always'],
    // specify whether double or single quotes should be used
    'babel/quotes': ['error', 'single', { avoidEscape: true }],
    // require or disallow use of semicolons instead of ASI
    'babel/semi': ['error', 'always'],
  },
};
