// Import components
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import MyForm from '../components/MyForm.vue';

// Route settings
const routes = [
    {
        path: '/',
        redirect: '/myform',
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
    },
    {
        path: '/myform',
        name: 'MyForm',
        component: MyForm,
    }
];

// Create a router instance
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
