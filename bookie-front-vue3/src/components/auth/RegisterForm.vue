<template>
  <div class="w-full mx-auto max-w-lg">
    <form
      v-on:submit.prevent
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div>Register</div>

      <base-input
        v-model="userEmail"
        :inputClasses="'border p-2 m-2 text-grey-darkest w-full'"
        name="email"
        id="email"
        type="text"
        placeholder="Email"
      >
        <!-- <baseErrorList
          :errors="v$RegisterForm.userEmail.$errors"
          :showAll="true"
          $slot="error-list"
        /> -->
      </base-input>

      <base-input
        v-model="userPassword"
        :inputClasses="'border p-2 m-2 text-grey-darkest w-full'"
        name="password"
        id="password"
        type="password"
        placeholder="Password"
      >
        <!-- <baseErrorList
          :errors="v$RegisterForm.userPassword.$errors"
          :showAll="true"
          $slot="error-list"
        /> -->
      </base-input>

      <base-input
        v-model="userRepeatPassword"
        :inputClasses="'border p-2 m-2 text-grey-darkest w-full'"
        name="repeatPassword"
        id="repeatPassword"
        type="password"
        placeholder="Repeat Password"
      >
        <!-- <baseErrorList
          :errors="v$RegisterForm.userRepeatPassword.$errors"
          :showAll="true"
          $slot="error-list"
        /> -->
      </base-input>

      <base-button
        :buttonClasses="'bg-teal-500 p-2 m-2 text-white w-full'"
        @click="handleRegistration"
        id="submit-register"
      >
        Register
      </base-button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance } from 'vue'
import useUser from '@/hooks/useUser'
import useUserRegister from '@/hooks/useUserRegister'
import useRouter from '@/router'

export default defineComponent({
  name: 'Register',

  setup(props, context) {
    const {
      userEmail, userPassword, userRepeatPassword, register, // v$RegisterForm
    } = useUserRegister()
    const { logIn } = useUser()
    const loading = ref(false)

    function toggleLoadingState() {
      loading.value = !loading.value
    }

    async function handleRegistration() {
      try {
        toggleLoadingState()
        const regData = await register({ email: userEmail.value, password: userPassword.value })
        console.log(regData)
        const logData = await logIn({ email: userEmail.value, password: userPassword.value })
        console.log(logData)

        useRouter.push({ name: 'home' })

      } catch (e) {
        console.log(e)
      } finally {
        toggleLoadingState()
      }
    }

    return {
      loading,
      userEmail,
      userPassword,
      userRepeatPassword,
      handleRegistration,
      // v$RegisterForm,
      register
    }
  }
})
</script>
