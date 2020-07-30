<template>
  <div>
    <router-link :to="{ name: 'home' }">Home</router-link> |
    <router-link :to="{ name: 'books' }">Books</router-link> |
    <span><!-- TODO -->
      <router-link
        v-if="!isLoggedIn"
        :to="{ name: 'login' }"
        class='login'
      >Login</router-link>
      <router-link
        v-else
        :to="{ name: 'my-account' }"
        class='my-account'
      >My Account</router-link>
    </span>
  </div>
</template>

<script  lang="ts">
import { defineComponent } from 'vue'
import useUser from '@/hooks/useUser'

export default defineComponent({
  name: 'Header',
  setup() {
    const {
      isLoggedIn
    } = useUser()

    return { isLoggedIn }
  }
})
</script>

<style lang="less" scoped>
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
