import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const entryPage = () => Promise.resolve(require('@/view/entryPage'))

// 多次点击同一路由时，执行catch，避免报错。
const routerPush = Router.prototype.push

Router.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'entryPage',
      component: entryPage
    }
  ]
})
