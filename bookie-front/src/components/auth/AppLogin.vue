<template>
  <div>
    <form v-on:submit.prevent>
      <div>Login</div>
      <input type="text" class="form-control" v-model="email">
      <input type="text" class="form-control" v-model="password">
      <button @click="login" type="button" class="btn btn-light">Login</button>
    </form>
    <router-link :to="{ name: 'register' }">Register</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ref } from '@vue/composition-api'
import AuthService from '@/services/AuthService'

export default Vue.extend({
  name: 'Login',
  setup() {
    const email = ref('')
    const password = ref('')

    async function login() {
      const { data } = await AuthService.login({ email: email.value, password: password.value })
      console.log(data)
    }

    return {
      email, password, login
    }
  }
})
</script>
