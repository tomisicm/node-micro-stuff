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

      this.syncSelectedCategories()
    },
    syncSelectedCategories () {
      console.log(this.localSelectedCategories)
      this.$store.dispatch('category/UPDATE_SELECTED_CATEGORIES', this.localSelectedCategories)
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
          class="w-full"
          :for="category.name"
          @click="updateSelectedCategory(category)"
        >
          <div class="grid grid-cols-5">
            <div 
              class="col-span-1 self-center"
            >
              <input
                :checked="category.selected"
                type="checkbox"
                :id="category.id"
              />
            </div>
            <div
              class="col-span-4 bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 px-2 rounded"
            >
              {{ category.name }}
            </div>
          </div>
        </button>
      </li>
    </ul>
  </div>
</template>
