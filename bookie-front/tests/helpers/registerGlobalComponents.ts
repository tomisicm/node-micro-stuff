import path from 'path'
import registerGlobals from '../../src/components/registerGlobals'

export default function registerGlobalComponents(VueInstance) {
  const componentsRelPath = 'src/components/base'
  const componentsAbsPath = path.resolve(process.cwd(), componentsRelPath)

  const registerComponents = registerGlobals(VueInstance)
  const shared = require.context(componentsAbsPath, false, /.vue$/)
  registerComponents(shared)
}

// TODO:
// figure out how to register multiple components without webpacks require.context
// https://stackoverflow.com/questions/38332094/how-can-i-mock-webpacks-require-context-in-jest
// https://github.com/vuejs/vue-test-utils/issues/1116
// Mocking strategy
// https://github.com/storybookjs/storybook/issues/2487

// solved this with babel plugin for require.context
// export default function registerGlobalComponents (VueInstance) {
//   const componentsRelPath = 'src/components/base'
//   const componentsAbsPath = path.resolve(process.cwd(), componentsRelPath)

//   fs
//     .readdirSync(componentsAbsPath)
//     .filter(file => {
//       return (file.indexOf('.') !== 0) && (file !== path.basename(__filename)) && (file.slice(-4) === '.vue')
//     })
//     .forEach((componentFile) => {
//       const componentName = componentFile.replace('.vue','').replace(/Base/g, 'base-').toLowerCase()
//     //   console.log(componentFile)
//     //   console.log(componentName)
//     //   console.log(path.resolve(route, componentFile))
//     //   console.log(await import(path.resolve(route, componentFile)))
//       import(path.resolve(componentsAbsPath, componentFile)).then((component) => {
//         VueInstance.component(componentName, component)
//       })
//     })
// }
