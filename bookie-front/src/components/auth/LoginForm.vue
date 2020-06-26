<template>
  <div class="w-full mx-auto max-w-lg">
    <form
      v-on:submit.prevent
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div>Login</div>

      <input
        v-model="email"
        type="text"
        class="border p-2 m-2 text-grey-darkest w-full"
        name="email"
        id="email"
      />

      <input
        v-model="password"
        type="password"
        class="border p-2 m-2 text-grey-darkest w-full"
        name="password"
      />

      <button
        @click="doSubmit"
        type="button"
        class="bg-teal-500 p-2 m-2 text-white w-full"
        id="submit-login"
      >Login</button>
    </form>
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
