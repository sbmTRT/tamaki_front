import { createApp } from 'vue';
import { createStore } from 'vuex';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'toastr/build/toastr.css';

import 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'datatables.net/js/jquery.dataTables.min.js';
import 'datatables.net-bs4/js/dataTables.bootstrap4.min.js';

import App from './App.vue';
import router from './routers/index.js';
import store from './stores/index.js';

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app')
