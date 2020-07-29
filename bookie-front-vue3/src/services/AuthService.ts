// import http from '@/services/httpService'
// import checkAndSetToken from '@/services/checkToken'
// import { AxiosInstance } from 'axios'

import { request } from 'graphql-request'

class AuthService {
  // client
  endpoint = 'http://127.0.0.1:7000/graphql'

  // constructor() {
  // this.client = request // http.instance
  // checkAndSetToken()
  // }

  async login(queryData) {
    const query = /* GraphQL */ `query
      userLogin($userInput: UserInput) {
        userLogin(userInput: $userInput) {
          id
          token
          expiresIn
        }
      }`

    const variables = {
      userInput: {
        ...queryData
      }
    }

    const data = await request(this.endpoint, query, variables)

    return data
  }

  async register(queryData) {
    const query = /* GraphQL */ `mutation
      createUser($userInput: UserInput) {
        createUser(userInput: $userInput) {
          id
          email
        }
      }`

    const variables = {
      userInput: {
        ...queryData
      }
    }

    const data = await request(this.endpoint, query, variables)

    return data
  }
}

export default new AuthService()
