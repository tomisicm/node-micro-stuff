<template>
  <div class="container mx-auto h-full flex justify-center items-center flow-root">
    <RegisterForm class="block"/>
    <router-link :to="{ name: 'login' }">Login</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import RegisterForm from '@/components/auth/RegisterForm.vue'

export default Vue.extend({
  name: 'AppLogin',
  components: {
    RegisterForm
  }
})
</script>
