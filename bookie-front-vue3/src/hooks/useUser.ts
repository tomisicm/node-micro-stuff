/* eslint-disable */
import AuthService from '@/services/AuthService'
import { ref, reactive, computed } from 'vue'
// import useVuelidate from '@vuelidate/core'
// import { required, minLength, email } from '@vuelidate/validators'

type FormData = { 
  email: string | undefined,
  password: string | undefined
}

const userEmail = ref('')
const userPassword = ref('')

let currentUser = reactive({
  id: '',
  email: '',
  password: ''
})

const isLoggedIn = computed(() => {
  if (currentUser.id) {
    return true
  }
  return false
})

function useUser() {
  async function logIn(formData: FormData) {
    try {
      const { userLogin } = await AuthService.login(
        { email: formData.email, password: formData.password }
      )

      if (userLogin.id) {
        currentUser = Object.assign(currentUser, {
          id: userLogin.id, email: userLogin.email, password: userLogin.password
        })
      }

      return userLogin
    } catch (e) {
      console.error(e)
      return {}
    }
  }

  // TODO: Not working with vue3

  // TODO: $autoDirty issue. Check after new version
  // https://github.com/vuelidate/vuelidate/issues/607
  // const v$LoginForm = useVuelidate(
  //   {
  //     userEmail: {
  //       required,
  //       email,
  //       $autoDirty: false
  //     },
  //     userPassword: {
  //       required,
  //       minLength: minLength(4),
  //       $autoDirty: false
  //     }
  //   },
  //   { userEmail, userPassword }
  // )

  return {
    userEmail, userPassword,  isLoggedIn, currentUser, logIn, // v$LoginForm,
  }
}

export default useUser

// composition api problem, vue.config
// https://github.com/ymchun/vue-dynamic-form/blob/master/vue.config.js