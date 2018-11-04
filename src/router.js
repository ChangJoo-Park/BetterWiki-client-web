import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Articles from './views/Articles.vue'
import Article from './views/Article.vue'
import ArticleNew from './views/ArticleNew.vue'
import ArticleEdit from './views/ArticleEdit.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      meta: {
        needAuth: true
      },
      component: Home,
      children: [{
          path: '',
          name: 'home',
          meta: {
            needAuth: true
          },
          component: Articles
        },
        {
          path: '/articles/new',
          name: 'article-new',
          meta: {
            needAuth: true
          },
          component: ArticleNew
        },
        {
          path: '/articles/:articleId',
          name: 'article',
          meta: {
            needAuth: true
          },
          component: Article
        },
        {
          path: '/articles/:articleId/edit',
          name: 'article-edit',
          meta: {
            needAuth: true
          },
          component: ArticleEdit
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        needAuth: false
      },
      component: () => import( /* webpackChunkName: "login" */ './views/Auth.vue')
    },
    {
      path: '/setup',
      name: 'setup',
      meta: {
        needAuth: false
      },
      component: () => import( /* webpackChunkName: 'setup' */ './views/Setup.vue')
    }
  ]
})
