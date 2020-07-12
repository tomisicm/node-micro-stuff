const esModules = ['lodash-es'].join('|')

module.exports = {
  transform: {
    [`(${esModules}).+\\.js$`]: 'babel-jest'
  },
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel'
}
