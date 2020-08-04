<script  lang="ts">
import { defineComponent } from 'vue'
import CategoriesFilter from '@/components/CategoriesFilter.vue'
import CategoriesContent from '@/components/CategoriesContent.vue'
import { mapGetters } from 'vuex'

export default defineComponent({
  name: 'BooksPage',
  components: {
    CategoriesFilter, CategoriesContent
  },

  data () {
    return {

    }
  },

  computed: {
    ...mapGetters('category', [
      'allCategories', 'selectedCategories'
    ]),
  }
})
</script>

<template>
  <div class="about">
    <div class="mx-4 my-4"><h1>This is an books page</h1></div>
    <div class="container">
      <div class="my-4 grid grid-cols-12">
        <div class="col-span-12 sm:col-span-4 md:col-span-4 lg:col-span-3 xl:col-span-3">
          <categories-filter
            :selectedCategories="selectedCategories"
            :allCategories="allCategories"
          ></categories-filter>
        </div>
        <div class="col-span-12 sm:col-span-8 md:col-span-8 lg:col-span-9 xl:col-span-9">
          <categories-content></categories-content>
        </div>
      </div>
    </div>
  </div>
</template>
