import './assets/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import Container from '@/components/Container.vue';
import Icon from '@/components/Icon.vue';

// Create the Vue application instance
const app = createApp(App);

app.use(createPinia())
   .use(router)
   .component('Container', Container)
   .component('Icon', Icon)
   .mount('#app');

// Google Analytics Initialization
(function initializeGtag() {
  window.dataLayer = window.dataLayer || [];

  function gtag() {
    dataLayer.push(arguments);
  }
  
  gtag('js', new Date());
  gtag('config', 'UA-131505823-4');
})();


