import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "./assets/main.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, faBars)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
