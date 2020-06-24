<template>
  <div>
    <div class="row">
    <input
      v-model="value"
    />
    </div>
    <div class="row">
      {{ error && error.message }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    value: {
      type: String,
      required: true
    },
    error: {
      type: Object,
      required: false,
      default: function () {
        return { message: '' }
      }
    }
  },

  methods: {
    handleChange() {
      console.log(this.$props.value)
    }
  }
})
</script>
