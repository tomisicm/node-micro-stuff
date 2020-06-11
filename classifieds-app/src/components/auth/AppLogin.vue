<template>
  <div>
    <h2>Login</h2>

    <div>
      <div>
        <form method="POST" v-on:submit.prevent>
          <div>
            <label for="email">Email:</label>
            <input
              v-model="form.email"
              type="email"
              name="email"
              id="email"
              aria-describedby="email"
              placeholder="Enter email"
            />
          </div>

          <div>
            <label for="password">Password:</label>
            <input
              v-model="form.password"
              type="password"
              name="password"
              id="password"
              aria-describedby="password"
              placeholder="Enter password"
            />
          </div>

          <div>
            <button @click="handleLogin">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { LOGIN_QUERY } from '@/graphql/authenticate'

export default {
  props: {
    userEmail: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      form: {
        email: this.userEmail || '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions('authStore', ['login']),

    async handleLogin () {
      try {
        await this.login(LOGIN_QUERY)
      } catch (error) {
        console.log(error)
      }
    }
  },
  computed: {},
  name: 'Login'
}
</script>
