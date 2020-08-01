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

<template>
  <div>
    <div>Categories</div>
    <ul v-for="category in allCategories" :key="category">
      <li>{{ category.name }}</li>
    </ul>
  </div>
</template>