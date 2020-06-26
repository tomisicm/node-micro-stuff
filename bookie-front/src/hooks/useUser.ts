import AuthService from '@/services/AuthService'
import VueCompositionApi, { ref, reactive, computed } from '@vue/composition-api'
import Vue from 'vue'

Vue.use(VueCompositionApi)

const email = ref('')
const password = ref('')

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

export default function useUser() {
  async function logIn(formData: { email: string; password: string }) {
    const { userLogin } = await AuthService.login({ email: email.value, password: password.value })

    if (userLogin.id) {
      currentUser = Object.assign(currentUser, {
        id: userLogin.id, email: email.value, password: password.value
      })
    }

    return userLogin
  }

  async function register(formData: { email: string; password: string }) {
    const { createUser } = await AuthService.register(
      { email: email.value, password: password.value }
    )
    return createUser
  }

  return {
    email, password, isLoggedIn, currentUser, logIn, register
  }
}
