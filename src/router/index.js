import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import CreateEtl from '@/components/CreateEtl'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/create',
      name: 'CreateEtl',
      component: CreateEtl
    }
  ]
})
