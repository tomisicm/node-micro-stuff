import AuthService from '@/services/AuthService'
import { ref } from 'vue'
// import useVuelidate from '@vuelidate/core'
// import {
//   required, minLength, email, sameAs
// } from '@vuelidate/validators'

const userEmail = ref('')
const userPassword = ref('')
const userRepeatPassword = ref('')

function useUserRegister() {
  // TODO: $autoDirty issue. Check after new version
  // https://github.com/vuelidate/vuelidate/issues/607
  // const v$RegisterForm = useVuelidate(
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
  //     },
  //     userRepeatPassword: {
  //       sameAsUserPassword: sameAs(userPassword),
  //       $autoDirty: false
  //     }
  //   },
  //   { userEmail, userPassword, userRepeatPassword }
  // )

  async function register(formData) {
    try {
      const { createUser } = await AuthService.register(
        { email: formData.email, password: formData.password }
      )
      return createUser
    } catch (e) {
      console.error(e)
      return {}
    }
  }

  return {
    userEmail, userPassword, userRepeatPassword, register, // v$RegisterForm
  }
}

export default useUserRegister
