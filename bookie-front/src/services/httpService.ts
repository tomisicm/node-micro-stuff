import axios, { AxiosInstance } from 'axios'

// const singleton = Symbol()
// const singletonEnforcer = Symbol()

class ApiService {
  session: AxiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:7000/graphql',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })

  get instance() {
    // Try to get an efficient singleton
    if (!this.session) {
      this.session = axios.create({
        baseURL: 'http://127.0.0.1:7000/graphql',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
    }

    return this.session
  }
}

export default new ApiService()
