import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const respondents = () => Promise.resolve(require('@/view/respondents'))
const login = () => Promise.resolve(require('@/view/login'))
const studentOption = () => Promise.resolve(require('@/view/studentOption'))

// 多次点击同一路由时，执行catch，避免报错。
const routerPush = Router.prototype.push

Router.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'respondents',
      component: respondents
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/studentOption',
      name: 'studentOption',
      component: studentOption
    }
  ]
})
