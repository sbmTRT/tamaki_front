// Import components
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import Register from '../views/entry/Register.vue';
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
        redirect: '/register',
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
    },
    {
        path: '/input',
        name: 'Input',
        component: Input,
    },
    {
        path: '/update',
        name: 'Update',
        component: Update,
    },
    {
        path: '/application',
        name: 'Application',
        component: Application,
    },
    {
        path: '/delete',
        name: 'Delete',
        component: Delete,
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
