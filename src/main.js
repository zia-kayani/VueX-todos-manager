import { createApp } from 'vue'
import store from '../src/store/index.js'
import App from './App.vue'

createApp(App).use(store).mount('#app')
