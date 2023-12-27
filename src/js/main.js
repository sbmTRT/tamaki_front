import { createApp } from 'vue'
import App from './App.vue'
import router from '../routers/router';

// Import our custom CSS
import '../scss/styles.scss'

// Import only the Bootstrap components we need
import { Popover } from 'bootstrap';
// Create a Vue app instance with the router and store
const app = createApp(App);

app.use(router);

app.mount('#app')

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new Popover(popover)
  })
