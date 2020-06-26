<template>
  <div class="w-full mx-auto max-w-lg">
    <form
      v-on:submit.prevent
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div>Register</div>

      <input
        v-model="email"
        type="text"
        class="border p-2 m-2 text-grey-darkest w-full"
        name="email"
        id="email"
      >

      <input
        v-model="password"
        type="password"
        class="border p-2 m-2 text-grey-darkest w-full"
      >

      <!-- <input
        v-model="repeatPassword"
        type="password"
        class="border p-2 m-2 text-grey-darkest w-full"
      > -->

      <button
        type="button"
        class="bg-teal-500 p-2 m-2 text-white w-full"
        :disabled="loading"
        @click="handleRegistration"
      >
        Register
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ref } from '@vue/composition-api'
import useUser from '@/hooks/useUser'

export default Vue.extend({
  name: 'Register',

  setup(props, context) {
    const {
      email, password, logIn, register
    } = useUser()
    const loading = ref(false)
    function toggleLoadingState() {
      loading.value = !loading.value
    }

    async function handleRegistration() {
      try {
        toggleLoadingState()
        const regData = await register({ email: email.value, password: password.value })
        const logData = await logIn({ email: email.value, password: password.value })
        context.root.$router.push({ name: 'home' })
      } catch (e) {
        console.log(e)
      } finally {
        toggleLoadingState()
      }
    }

    return {
      loading, email, password, handleRegistration
    }
  }
})
</script>
