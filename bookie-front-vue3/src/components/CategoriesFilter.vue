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
      console.log(category.selected)
      if (!category.selected) {
        this.localSelectedCategories.push(category)
      } else {
        // remove from array
      }
      this.syncSelectedCategories()
    },
    syncSelectedCategories () {
      console.log('this.localSelectedCategories')
      console.log(this.localSelectedCategories)
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
