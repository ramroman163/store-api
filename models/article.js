import { createRequire } from 'node:module'

/* Creamos un require para importar el json y trabajar con él */

const require = createRequire(import.meta.url)
const articles = require('../articles.json')

import { randomUUID } from 'node:crypto'

export class ArticleModel {
  static async getAll () {
    return articles
  }

  static async getById (id) {
    const article = articles.find(article => article.id === id)

    return article
  }

  static async getByCategory (category) {
    const selectedArticles = articles.filter(article => article.category === category)

    return selectedArticles
  }

  static async create (input) {
    const newArticle = {
      id: randomUUID(),
      release_date: new Date("yyyy, mm, dd"),
      ...input
    }

    articles.push(newArticle)
    return;
  }

  static async update (id, input) {
    const articleIndex = articles.findIndex(article => article.id === id)

    if (articleIndex < 0) {
      return false
    }

    const updatedArticle = {
      ...articles[articleIndex],
      ...input
    }

    articles[articleIndex] = updatedArticle

    return articles[articleIndex]
  }

  static async delete (id) {
    const articleIndex = articles.findIndex(article => article.id === id)

    if (articleIndex < 0) {
      return false
    }

    articles.splice(articleIndex, 1)
    return true
  }
}