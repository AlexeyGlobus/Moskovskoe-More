import * as VueRouter from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router'

import AppHome from './views/AppHome.vue';
import AppCounter from './views/AppCounter.vue';

export default VueRouter.createRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/counters/:id(\\d+)',
            name: 'Counter page',
            component: AppCounter
        }
    ],
    history: createWebHistory()
});