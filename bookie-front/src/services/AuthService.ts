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

  async login(queryData: any) {
    const query = /* GraphQL */ `query userLogin($userInput: UserInput) {
      userLogin(userInput: $userInput )
      {
        id
        token
        expiresIn
      }
    }`

    const variables = {
      userInput: {
        email: 'qweqwe@12311.qwe',
        password: 'asdaasd@'
      }
    }

    const data = await request(this.endpoint, query, variables)

    console.log(data)

    return data
  }

  public async register(queryData: any) {
    const query = /* GraphQL */ `mutation createUser($userInput: { email: $email, password: $passwprd }) 
    {
      id
      token
      expiresIn
    }`

    const variables = queryData

    const data = await request(this.endpoint, query, variables)

    console.log(data)

    return data
  }
}

export default new AuthService()
