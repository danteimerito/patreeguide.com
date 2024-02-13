import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store/store';
import './styles/sass.scss';
import VueGtag from 'vue-gtag';
import 'hacktimer';

// icon
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { GiRoundKnob } from "oh-vue-icons/icons";
addIcons(GiRoundKnob);

createApp(App)
  .use(VueGtag, {
    config: { id: process.env.VUE_APP_GOOGLE_ANALYTICS_TRACKING_ID }
  }, router)
  .use(router)
  .use(store)
  .component("v-icon", OhVueIcon)
  .mount('#app')