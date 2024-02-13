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

createApp(App)
  .use(router)
  .use(store)
  .component("v-icon", OhVueIcon)
  .mount('#app')