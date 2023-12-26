import {createApp} from 'vue';
import App from './App.vue';
import store from './stores/store';
import router from './routers/router';

import bootstrapcss from '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import bootstrapjs from '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import jquery from  '../node_modules/jquery/dist/jquery.min.js'; // Import Jquery

// Create a Vue app instance with the router and store
const app = createApp(App);
app.use(store);
app.use(router);
app.use(bootstrapcss);
app.use(bootstrapjs);
app.use(jquery);

// Mount the app to the element with id 'app'
app.mount('#app');