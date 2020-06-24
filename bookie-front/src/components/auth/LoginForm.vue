<template>
  <div>
    <form v-on:submit.prevent>
      <div>Login</div>

      <input
        v-model="email"
        type="text"
        class="form-control"
        name="email"
        id="email"
      />

      <input
        v-model="password"
        type="text"
        class="form-control password"
        name="password"
      />

      <button
        @click="doSubmit"
        type="button"
        class="btn btn-light"
        id="submit-login"
      >Login</button>
    </form>
    <div>is logged in {{ isLoggedIn }}</div>
    <div>currentUser {{ JSON.stringify(currentUser) }}</div>
    <router-link :to="{ name: 'register' }">Register</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import useUser from '@/hooks/useUser'

export default Vue.extend({
  name: 'Login',

  setup() {
    const {
      email, password, isLoggedIn, logIn, currentUser
    } = useUser()

    const validateForm = () => true

    const resetForm = () => {
      email.value = ''
      password.value = ''
    }

    const doSubmit = async () => {
      const isReady = validateForm()

      if (!isReady) {
        return
      }

      await logIn({ email: email.value, password: password.value })
      resetForm()
    }

    return {
      email, password, isLoggedIn, doSubmit, currentUser
    }
  }
})
</script>
