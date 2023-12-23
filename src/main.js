import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/store'
import './styles/sass.scss';
import VueGtag from 'vue-gtag';

createApp(App)
  .use(VueGtag, {
    config: { id: "G-8XHB2YVL29" }
  }, router)
  .use(router)
  .use(store)
  .mount('#app')