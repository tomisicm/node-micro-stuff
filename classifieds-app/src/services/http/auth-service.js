import http from './http-service'

class AuthService {
  login (email, password) {
    return http
      .post('/login', {
        email,
        password
      })
      .then(response => {
        this.loggingIn(response.data)
        // return response
      })
      .catch(error => {
        throw error
      })
  }

  register (email, password, passwordConfirm) {
    return http
      .post('/register', {
        email,
        password,
        passwordConfirm
      })
      .then(response => {
        return response
      })
      .catch(error => {
        throw error
      })
  }

  logout () {

    localStorage.removeItem('user')
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    this.setAuthHeaders()
    return Promise.resolve()
  }

  setAuthHeaders (token) {
    if (!token) {
      delete http.defaults.headers.common['authorization']
      return
    }
    return (http.defaults.headers.common['authorization'] = `Bearer ${token}`)
  }

  loggingIn (data) {
    localStorage.setItem('user', JSON.stringify(data.user))
    localStorage.setItem('token', data.token)
    localStorage.setItem('id', data.user._id)
    this.setAuthHeaders(data.token)
  }
}

const checkToken = service => {
  let token = localStorage.getItem('token')

  if (token) {
    service.setAuthHeaders(token)
  }
}

const authService = new AuthService()

checkToken(authService)

export default authService