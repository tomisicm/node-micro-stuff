<template>
  <div>
    filter qqyy
    <div v-for="category in allCategories" :key="category">
      {{ category }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoriesFilter',

  props: {
    allCategories: {
      type: Array,
      required: false,
      default: () => []
    }
  }
  
}
</script>