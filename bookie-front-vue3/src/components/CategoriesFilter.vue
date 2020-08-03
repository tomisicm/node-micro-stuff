<script lang="ts">
import { defineComponent } from 'vue'
// import { SelectedCategory } from '@/types/category'

export default defineComponent({
  name: 'CategoriesFilter',

  props: {
    allCategories: {
      type: Array,
      required: false,
      default: () => []
    },
    selectedCategories: {
      type: Array,
      required: false,
      default: () => []
    }
  },

  setup () {
  },

  data () {
    return {
      localSelectedCategories: this.selectedCategories
    }
  },

  methods: {
    updateSelectedCategory(category: any) {
      if (!category.selected) {
        category.selected = true
        this.localSelectedCategories.push(category)
      } else {
        // remove from array
        const index = this.localSelectedCategories.findIndex(selectedCategory => selectedCategory.id == category.id)

        const newData = [
          ...this.localSelectedCategories.slice(0, index),
          ...this.localSelectedCategories.slice(index + 1)
        ]

        this.localSelectedCategories = newData
      }
      console.log(this.localSelectedCategories)
      this.syncSelectedCategories()
    },
    syncSelectedCategories () {
      // console.log('this.localSelectedCategories')
      // console.log(this.localSelectedCategories)
      // this.$store.dispatch('category/UPDATE_SELECTED_CATEGORIES', this.localSelectedCategories)
    }
  }
})
</script>

<template>
  <div>
    <div>Categories</div>
    <ul v-for="category in allCategories" :key="category.id">
      <li>
        <button
          :for="category.name"
          @click="updateSelectedCategory(category)"
        >
          <input
            :checked="category.selected"
            type="checkbox"
            :id="category.id"
          />
          {{ category.name }}
        </button>
      </li>
    </ul>
  </div>
</template>
