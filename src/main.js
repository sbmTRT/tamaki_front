import { createApp } from 'vue';
import { createStore } from 'vuex'

import App from './App.vue';
import router from './routers/router';
import store from './store';

const app = createApp(App);
const vuexStore = createStore(store);

app.use(router);
app.use(vuexStore);

app.mount('#app')