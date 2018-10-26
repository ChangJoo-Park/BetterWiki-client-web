import axios from 'axios'

export default class Auth {
  static async login ({ email, password } = {}) {
    try {
      const { data } = await axios({
        url: '/api/login',
        method: 'POST',
        data: { email, password }
      })
      window.localStorage.setItem('token', `Bearer ${data.token}`)
      return Promise.resolve(data)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  static async getMe () {
    try {
      const Authorization = window.localStorage.getItem('token')

      if (!Authorization) {
        throw new Error('NO_TOKEN')
      }

      const { data } = await axios({
        url: '/api/me',
        method: 'GET',
        headers: {
          Authorization
        }
      })
      console.log('data => ', data)
      return Promise.resolve(data)
    } catch (error) {
      return Promise.reject(error)
    }
  }
  static logout () {

  }
}
