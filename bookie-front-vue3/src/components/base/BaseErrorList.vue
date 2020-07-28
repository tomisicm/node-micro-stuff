<template>
  <div :class="wrapperClasses + ' text-left px-2 text-red-500'">
    <div v-for="(error) in errorList" :key="error">
      {{ error }}
    </div>
  </div>
</template>

<script>
// https://github.com/vuejs/vue/pull/6856
// https://stackoverflow.com/questions/54391162/typescript-wont-recognize-prop-values-on-vue-component
// interface Error {
//   $message: string;
// }

export default {
  props: {
    errors: {
      type: Array,
      required: true
    },

    showAll: {
      type: Boolean,
      required: false,
      default: true
    },

    wrapperClasses: {
      type: String,
      required: false,
      default: ''
    }
  },

  computed: {
    errorList() {
      if (!this.errors.length) { return [] }

      if (this.showAll) {
        return this.errors.map((error) => error.$message)
      }
      return this.errors[0].$message
    }
  }
}
</script>
