module.exports = {
  verbose: true,
  testURL: 'http://localhost/',
  transform: {
    '^.+\\.(ts|tsx)$': '../../node_modules/@stencil/core/testing/jest.preprocessor.js'
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(tsx?|jsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx']
};
