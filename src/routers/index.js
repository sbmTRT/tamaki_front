// Import components
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import About from '../views/About.vue';

// Route settings
const routes = [
    {
        path: '/',
        redirect: '/selection',
    },
    {
        path: '/about',
        name: 'About',
        component: About,
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
