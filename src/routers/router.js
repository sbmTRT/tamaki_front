// Import components
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';

// Route settings
const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
    }
];

// Create a router instance
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
