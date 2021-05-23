import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter)

import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import HomePage from './components/HomePage'

const routes = [
  { path: '/', component: HomePage, name: 'homepage' },
  { path: '/login', component: Login, name: 'login' },
  { path: '/register', component: Register },
  { path: '/dashboard', component: Dashboard, name: 'dashboard' }
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
