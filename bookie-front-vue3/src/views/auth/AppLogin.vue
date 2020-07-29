<template>
  <div class="container mx-auto h-full flex justify-center items-center flow-root">
    <LoginForm class="block"/>
    <div class="block">
      <router-link :to="{ name: 'register' }">Register</router-link>
    </div>
  </div>
</template>

<script  lang="ts">
import LoginForm from '@/components/auth/LoginForm.vue'

export default {
  name: 'AppLogin',
  components: {
    LoginForm
  }
}
</script>
