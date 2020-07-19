import AuthService from '@/services/AuthService'
import VueCompositionApi, { ref, reactive, computed } from '@vue/composition-api'
import Vue from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, minLength, email } from '@vuelidate/validators'

Vue.use(VueCompositionApi)

const userEmail = ref('')
const userPassword = ref('')
const userRepeatPassword = ref('')

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
  async function logIn(formData) {
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

  // TODO: $autoDirty issue. Check after new version
  // https://github.com/vuelidate/vuelidate/issues/607
  const v$LoginForm = useVuelidate(
    {
      userEmail: {
        required,
        email,
        $autoDirty: false
      },
      userPassword: {
        required,
        minLength: minLength(4),
        $autoDirty: false
      }
    },
    { userEmail, userPassword }
  )

  async function register(formData) {
    const { createUser } = await AuthService.register(
      { email: formData.email, password: formData.password }
    )
    return createUser
  }

  // const validateAttemptRegister = useVuelidate()

  return {
    userEmail, userPassword, v$LoginForm, isLoggedIn, currentUser, logIn, register
  }
}

export default useUser
