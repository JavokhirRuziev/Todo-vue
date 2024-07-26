import Vue from 'vue'
import Router from 'vue-router'
import UserTable from '@/components/UserTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: UserTable
    }
  ]
})
