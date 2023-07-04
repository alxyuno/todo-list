import { createApp } from 'vue';
import '@/assets/global.css';
import App from './App.vue';
import { createPinia } from 'pinia';

const app = createApp(App);
app.mount('#app');
app.use(createPinia());
