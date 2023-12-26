import {createApp} from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue';
import store from './stores/store';
import router from './routers/router';

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Create a Vue app instance with the router and store
const app = createApp(App);
app.use(store);
app.use(router);
// Make BootstrapVue available throughout your project
app.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
app.use(IconsPlugin)

// Mount the app to the element with id 'app'
app.mount('#app');


