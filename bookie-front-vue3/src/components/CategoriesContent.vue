<script  lang="ts">
import { defineComponent, PropType, watch, readonly, getCurrentInstance } from 'vue'
import { SelectedCategory } from '@/types/category'

export default defineComponent({
  name: 'selected books',

  setup (props, context) {
    function fetchNewProducts(oldVal, newVal): void {
      console.log(oldVal)
      console.log(newVal)
    }

    // https://medium.com/js-dojo/watch-vue-route-params-query-with-composition-api-97b3c8c402e
    // https://github.com/vuejs/rfcs/issues/70
    const router =  getCurrentInstance().ctx.$router
    // debugger // eslint-disable-line
    // console.log(props) 
    // console.log(getCurrentInstance().ctx.$router)

    watch(() => router, (oldVal, newVal) => fetchNewProducts(oldVal, newVal), { deep: true, immediate: true })

    return {
      
    }
  },

  data() {
    return {
    }
  },

  // TODO: https://vue-composition-api-rfc.netlify.app/api.html#dependency-injection
  methods: {

  },

  // watch: {
  //   $route: {
  //     handler: function (from, to) {
  //       // debugger // eslint-disable-line

  //     },
  //     deep: true,
  //     immediate: true
  //   }
  // }
})
</script>

<template>
  <div class="container">
    <h1>Selected Books</h1>
    <div class="my-5">
      list of books
    </div>
  </div>
</template>
