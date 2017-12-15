import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Login from '@/components/Login/Login'
import TimeLine from '@/components/TimeLine/TimeLine'
import Meetings from '@/components/Meetings/Meetings'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: Login },
    { path: '/timeline', name: 'TimeLine', component: TimeLine },
    { path: '/meetings', name: 'Meetings', component: Meetings }
  ]
})
