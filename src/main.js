import { createApp } from 'vue';
import App from './App.vue';
import store from './stores/store';
import router from './routers/router';

// Create a Vue app instance with the router and store
const app = createApp(App);
app.use(store);
app.use(router);

// Mount the app to the element with id 'app'
app.mount('#app');
