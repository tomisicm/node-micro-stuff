<script  lang="ts">
import { defineComponent, PropType } from 'vue'
import { SelectedCategory } from '@/types/category' 

export default defineComponent({
  name: 'selected books',

  data() {
    return {
    }
  },

  // TODO: https://vue-composition-api-rfc.netlify.app/api.html#dependency-injection
  methods: {

  },

  watch: {
    // '$router.currentRoute': {
    //   handler: function (oldVal, newVal) {
    //     console.log(oldVal)
    //     console.log(newVal)
    //   },
    //   deep: true,
    //   immediate: true
    // }
  }
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
