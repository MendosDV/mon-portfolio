import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "./assets/styles.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faBars, faMap, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/Home.vue'
import 'bs5-lightbox';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

library.add(faUserSecret, faBars, faMap, faEnvelope)

createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
