<template>
  <div>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <template>
      <router-link v-if="!isLoggedIn" :to="{ name: 'login' }">Login</router-link>
      <router-link v-else :to="{ name: 'my-account' }">My Account</router-link>
    </template>

  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import useUser from '@/hooks/useUser'

export default Vue.extend({
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
