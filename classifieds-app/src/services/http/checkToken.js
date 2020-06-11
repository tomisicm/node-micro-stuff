import { http, setAuthHeader } from './http-service'

const checkToken = () => {
  const token = localStorage.getItem('token')

  if (token) {
    setAuthHeader(token)
  } else {
    delete http.defaults.headers.common.Authorization
  }
}

export default checkToken
