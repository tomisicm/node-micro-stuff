<template>
  <div>
    <form v-on:submit.prevent>
      <div>Register</div>
      <input type="text" class="form-control" v-model="email">
      <input type="text" class="form-control" v-model="password">
      <button
        type="button" class="btn btn-light"
        :disabled="loading"
        @click="register"
      >
        Register
      </button>
    </form>
    <router-link :to="{ name: 'login' }">Login</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ref } from '@vue/composition-api'
import AuthService from '@/services/AuthService'

export default Vue.extend({
  name: 'Register',

  setup() {
    const loading = ref(false)
    const email = ref('')
    const password = ref('')

    function toggleLoadingState() {
      loading.value = !loading.value
    }

    async function register() {
      toggleLoadingState()

      const { data } = await AuthService.register({ email: email.value, password: password.value })

      toggleLoadingState()
    }

    return {
      loading, email, password, register
    }
  }
})
</script>
