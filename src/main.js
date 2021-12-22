import './assets/css/bootstrap.min.css'
import './assets/fonts/merriweather.css'
import './assets/fonts/sans.css'
import './assets/css/style.css'
import './assets/css/responsive.css'
import Toaster from '@meforma/vue-toaster';
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(Toaster).mount('#app')
