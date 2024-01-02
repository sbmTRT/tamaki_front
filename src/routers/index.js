// Import components
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import Menu from '../views/entry/Menu.vue';
import Input from '../views/entry/Input.vue';
import Application from '../views/entry/Application.vue';
import Delete from '../views/entry/Delete.vue';
import Update from '../views/entry/Update.vue';
import Add from '../views/member/Add.vue';
import List from '../views/member/List.vue';

// Route settings
const routes = [
    {
        path: '/',
        redirect: '/menu',
    },
    {
        path: '/menu',
        name: 'menu',
        component: Menu,
    },
    {
        path: '/input',
        name: 'input',
        component: Input,
    },
    {
        path: '/update',
        name: 'update',
        component: Update,
    },
    {
        path: '/application',
        name: 'application',
        component: Application,
    },
    {
        path: '/delete',
        name: 'delete',
        component: Delete,
        props: (route) => ({ uploadedImages: route.params.uploadedImages }),
    },
    {
        path: '/add',
        name: 'Add',
        component: Add,
    },
    {
        path: '/list',
        name: 'List',
        component: List,
    }
];

// Create a router instance
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
