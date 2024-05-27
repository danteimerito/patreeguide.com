import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store/store';
import './styles/sass.scss';
import 'hacktimer';

// icon
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { GiRoundKnob } from "oh-vue-icons/icons";
addIcons(GiRoundKnob);

import VueGtag from 'vue-gtag';

const app = createApp(App)
  .use(router)
  .use(store)
  .component("v-icon", OhVueIcon);
// Send analytics only in production, not development
if (process.env.NODE_ENV === 'production') {
  app.use(VueGtag, {
    config: {
      id: process.env.VUE_APP_GA_MEASUREMENT_ID
    }
  });
}

app.mount('#app');
