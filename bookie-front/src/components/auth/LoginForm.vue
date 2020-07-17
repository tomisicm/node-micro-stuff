<template>
  <div class="w-full mx-auto max-w-lg">
    <form
      v-on:submit.prevent
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div>Login</div>

      <base-input
        v-model="email"
        :inputClasses="'border p-2 m-2 text-grey-darkest w-full'"
        name="email"
        id="email"
        type="text"
        placeholder="Email"
      />

      <base-input
        v-model="password"
        :inputClasses="'border p-2 m-2 text-grey-darkest w-full'"
        name="password"
        id="password"
        type="password"
        placeholder="Password"
      />

      <base-button
        :buttonClasses="'bg-teal-500 p-2 m-2 text-white w-full'"
        @click="doSubmit"
        id="submit-login"
      >
        Login
      </base-button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import useUser from '@/hooks/useUser'

export default Vue.extend({
  name: 'Login',

  setup(props, context) {
    const {
      email, password, isLoggedIn, logIn
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
      try {
        context.root.$store.commit('showLoader', context.root)
        await logIn({ email: email.value, password: password.value })
        resetForm()
      } catch (e) {
        console.log(e)
      } finally {
        context.root.$store.commit('hideLoader', context.root)
      }
    }

    return {
      email, password, isLoggedIn, doSubmit
    }
  }
})
</script>
