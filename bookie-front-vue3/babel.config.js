// eslint-disable-next-line
module.exports = function (api) {
  api.cache(true)

  const presets = [
    '@vue/cli-plugin-babel/preset'
  ]
  const plugins = []

  // if (process.env.NODE_ENV === 'test') {
  //   plugins.push('require-context-hook')
  // }

  return {
    presets,
    plugins
  }
}
