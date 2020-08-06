<script lang="ts">
import { defineComponent } from 'vue'
import { SelectedCategory } from '@/types/category' 

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
      localSelectedCategories: this.selectedCategories as SelectedCategory[]
    }
  },

  methods: {
    updateSelectedCategory(category: SelectedCategory) {
      if (!category.selected) {
        category.selected = true
        this.localSelectedCategories.push(category)
      } else {
        category.selected = false

        const idx = this.localSelectedCategories
          .findIndex((selectedCategory: SelectedCategory) => selectedCategory.id == category.id)
        const newData = [
          ...this.localSelectedCategories.slice(0, idx),
          ...this.localSelectedCategories.slice(idx + 1)
        ]
        this.localSelectedCategories = newData
      }
      this.syncSelectedCategories()
    },
    syncSelectedCategories () {
      this.$store.dispatch('category/UPDATE_SELECTED_CATEGORIES', this.localSelectedCategories)
    }
  },

  watch: {
    
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
