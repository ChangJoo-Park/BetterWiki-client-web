import BaseModel from './Base'

export default class Service extends BaseModel {
  static isSetup () {
    return this.httpClient({
      url: `${this.baseURL}/setup/check`,
      method: 'GET'
    }).then(response => response.data)
  }

  static setup ({ admin, service } = {}) {
    return this.httpClient({
      url: `${this.baseURL}/setup`,
      method: 'POST',
      data: {
        admin, service
      }
    }).then(response => response.data)
  }
}

Service.resourceURL = '/service'
