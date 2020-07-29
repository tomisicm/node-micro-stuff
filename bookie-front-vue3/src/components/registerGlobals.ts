// import { upperFirst, camelCase } from 'lodash-es'

const requireComponent = require.context('./base', false, /Base[\w-]+\.vue$/)

function registerGlobals(VueInstance) {
  requireComponent.keys().forEach((fileName) => {
    // Get the component config
    const componentConfig = requireComponent(fileName)
    // Get the PascalCase version of the component name
    const componentName = fileName
      // Remove the "./" from the beginning
      .replace(/^\.\//, '')
      // Remove the file extension from the end
      .replace(/\.\w+$/, '')
      // Split up kebabs
      .split('-')
      // Upper case
      .map((kebab) => kebab.charAt(0).toUpperCase() + kebab.slice(1))
      // Concatenated
      .join('')

    VueInstance.component(componentName, componentConfig.default || componentConfig)
  })
}

export default registerGlobals
