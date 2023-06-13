import * as VueRouter from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router'

import AppHome from './views/AppHome.vue';
import AppAnother from './views/AppAnother.vue';

export default VueRouter.createRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome,
        },
        {
            path: '/another/:id(\\d+)',
            name: 'Another page',
            component: AppAnother,
        }
    ],
    history: createWebHistory(),
});