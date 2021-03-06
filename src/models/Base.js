export default class BaseModel {
  baseURL
  httpClient
  get baseURL() {
    return this.baseURL
  }

  set baseURL(baseURL) {
    this.baseURL = baseURL
  }

  get httpClient() {
    return this.httpClient
  }

  set httpClient(client) {
    this.httpClient = client
  }

  static get url() {
    this.httpClient.defaults.headers.common['Authorization'] = window.localStorage.getItem('token')
    return `${this.baseURL}${this.resourceURL}`
  }

  static find(params = {}) {
    return this.httpClient({
      method: 'GET',
      url: this.url,
      params
    }).then(res => res.data)
  }

  /**
   *
   * @param {string} id
   */
  static findOne(id, params = {}) {
    if (!id) {
      throw new Error('id not found')
    }
    return this.httpClient.get(`${this.url}/${id}`).then(res => res.data)
  }

  static save(data) {
    return this.httpClient({
      method: 'POST',
      url: this.url,
      data
    }).then(res => res.data)
  }

  static update() {
    console.log('update')
  }

  static delete() {
    console.log('delete')
  }
}
