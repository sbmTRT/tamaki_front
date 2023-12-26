import { createApp } from 'vue';
import App from './App.vue';
import store from './stores/store';
import router from './routers/router';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import 'jquery/dist/jquery.min.js'; // Import jQuery

// Create a Vue app instance with the router and store
const app = createApp(App);
app.use(store);
app.use(router);

// Mount the app to the element with id 'app'
app.mount('#app');
