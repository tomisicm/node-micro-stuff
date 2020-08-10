<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { createNamespacedHelpers } from 'vuex'
import { Category, SelectedCategory } from '@/types/category'
import { isUrlEmpty } from '@/helpers/urlStructure'

const { mapState } = createNamespacedHelpers('query')

export default defineComponent({
  name: 'CategoriesFilter',

  props: {
    allCategories: {
      type: Array as PropType<Category[]>,
      required: false,
      default: () => []
    }
  },

  data () {
    return {
    }
  },

  mounted() {
    // console.log(this)
    console.log('categories')
  },

  created() {
    this.checkQueryAndSetSelectedCategories()
  },

  methods: {
    checkQueryAndSetSelectedCategories() {
      // TODO: value will be removed
      if (this.$router.currentRoute.value) {
        
        if (!isUrlEmpty(this.$router.currentRoute.value.query)) {
          this.$store.dispatch('query/UPDATE_SELECTED_QUERY', this.$router.currentRoute.value.query)
        }
      }
    },
    updateSelectedCategory(category: Category) {
      const isSelected = this.selectedCategories.includes(category.name)

      if (isSelected) {
        this.$store.dispatch('query/REMOVE_SINGLE_SELECTED_QUERY', category)
      } else {
        this.$store.dispatch('query/ADD_SINGLE_SELECTED_QUERY', category)
      }
      this.updateRoute()
    },

    updateRoute() {
      if (this.selectedCategories.length > 1) {
        this.$router.push({
          name: 'books',
          query: { 'categories': this.selectedCategories }
        })
      } else if (this.selectedCategories.length == 1) {
        this.$router.push({
          name: 'books',
          query: { 'categories': this.selectedCategories[0] }
        })
      } else {
        this.$router.push({
          name: 'books'
        })
      }
    }
  },

  computed: {
    ...mapState({
      selectedCategories: state => state.selectedCategories,
    })
  },
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
                :checked="selectedCategories.includes(category.name)"
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
