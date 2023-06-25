import { createApp } from 'vue'
import { createPinia } from 'pinia'
const pinia = createPinia()
import App from './App.vue'
import router from './router'
import store from './store/sidebar'

createApp(App).use(store).use(router).use(pinia).mount('#app')
