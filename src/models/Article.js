import BaseModel from './Base'

export default class Article extends BaseModel {

  constructor(title) {
    this.title = title
  }
}

Article.resourceURL = '/articles'
