<template>
  <div class="w-full mx-auto max-w-lg">
    <form
      v-on:submit.prevent
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div>Login</div>

      <base-input
        :modelValue="userEmail"
        @update:modelValue="userEmail = $event"
        :inputClasses="'border p-2 m-2 text-grey-darkest w-full'"
        name="email"
        id="email"
        type="text"
        placeholder="Email"
      >
        <!-- <baseErrorList
          :errors="v$LoginForm.userEmail.$errors"
          :showAll="true"
          slot="error-list"
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
          :errors="v$LoginForm.userPassword.$errors"
          :showAll="true"
          slot="error-list"
        /> -->
      </base-input>

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
import useUser from '@/hooks/useUser'
import Store from '@/store'
// import { getCurrentInstance } from 'vue'

export default {
  name: 'Login',

  setup(props, context) {
    const {
      userEmail, userPassword, isLoggedIn, logIn // v$LoginForm
    } = useUser()

    const validateForm = () => true

    const resetForm = () => {
      userEmail.value = ''
      userPassword.value = ''
    }

    // TODO
    // https://morioh.com/p/1b30fd946b0f
    // https://dev.to/kozo002/how-to-use-vuex-s-state-getters-with-composition-api-in-vue-component-2f9b
    // https://vueschool.io/articles/vuejs-tutorials/state-management-with-composition-api/
    // https://medium.com/everything-full-stack/how-to-use-vuex-mappers-inside-vue-composition-api-dbce8a39c06c

    // https://github.com/vuejs/vue-next/issues/1598

    const doSubmit = async () => {
      const isReady = validateForm()

      if (!isReady) {
        return
      }
      try {
        Store.commit('showLoader', context.root)   // TODO
        await logIn({ email: userEmail.value, password: userPassword.value })
        resetForm()
      } catch (e) {
        console.log(e)
      } finally {
        Store.commit('hideLoader', context.root)
      }
    }

    return {
      userEmail, userPassword, isLoggedIn, doSubmit // v$LoginForm,
    }
  }
}
</script>
