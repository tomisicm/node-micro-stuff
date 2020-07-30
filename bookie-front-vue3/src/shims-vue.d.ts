// TODO: STUDY https://github.com/ChrisShank/vue-next-webpack-preview
declare module '*.vue' {
  import { defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent>
  export default component
}
