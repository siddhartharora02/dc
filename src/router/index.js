import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Account from '@/components/Account'
import Uploads from '@/components/Uploads'
import Bank from '@/components/Bank'
import ProfileComplete from '@/components/ProfileComplete'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
    {
      path: '/uploads/:id',
      name: 'Uploads',
      props:true,
      component: Uploads
    },
    {
      path: '/bank/:id',
      name: 'Bank',
      props:true,
      component: Bank
    },
    {
      path: '/profile-complete/:id',
      name: 'ProfileComplete',
      component: ProfileComplete
    }
  ],
  mode: 'history'
})
