<template>
  <div class="about">
    <div class="mx-4 my-4"><h1>This is an books page</h1></div>
    <div class="container">
      <div class="grid grid-cols-12">
        <div class="col-span-12 sm:col-span-4 md:col-span-4 lg:col-span-3 xl:col-span-3">
          <categories-filter :allCategories="allCategories"></categories-filter>
        </div>
        <div class="col-span-12 sm:col-span-8 md:col-span-8 lg:col-span-9 xl:col-span-9">
          <categories-content></categories-content>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoriesFilter from '@/components/CategoriesFilter'
import CategoriesContent from '@/components/CategoriesContent'
import { mapGetters } from 'vuex'

export default {
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
}
</script>