// main.js

import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import 'bootstrap-vue/dist/bootstrap-vue.css'; // Import BootstrapVue CSS
import { BootstrapVue } from 'bootstrap-vue';

const app = createApp(App);

app.use(BootstrapVue);

app.mount('#app');
