module.exports = {
  roots: ['<rootDir>'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.js?$',
  moduleFileExtensions: ['js', 'json', 'node'],
  collectCoverage: true,
  clearMocks: true,
  coverageDirectory: "coverage",
  "testEnvironment": "node"
}