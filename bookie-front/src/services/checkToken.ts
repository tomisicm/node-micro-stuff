import http from './httpService'

const checkAndSetToken = () => {
  const token = localStorage.getItem('token')

  if (!token) {
    delete http.instance.defaults.headers.common.Authorization
  } else {
    http.instance.defaults.headers.common.Authorization = `Bearer ${token}`
  }
}

export default checkAndSetToken
