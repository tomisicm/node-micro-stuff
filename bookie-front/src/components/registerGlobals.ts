import { upperFirst, camelCase } from 'lodash-es'
import { VueConstructor } from 'vue'

function registerGlobals(VueInstance: VueConstructor) {
  return function registerComponents(requireComponent) {
    requireComponent.keys().forEach((fileName) => {
      const componentConfig = requireComponent(fileName)

      const componentName = upperFirst(camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')))

      VueInstance.component(componentName, componentConfig.default || componentConfig)
    })
  }
}

export default registerGlobals
