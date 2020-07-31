<template>
  <div>
    filter qqyy
    <div v-for="category in allCategories" :key="category">
      {{ category }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CategoriesFilter',

  props: {
    allCategories: {
      type: Array,
      required: false,
      default: () => []
    }
  }
  
})
</script>