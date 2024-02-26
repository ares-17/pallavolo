import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue';

export const router = createRouter({
    history: createWebHistory(import.meta.url),
    scrollBehavior() {
        return { el: '#app', behavior: 'smooth' }
    },
    routes: [{
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/',
        name: 'opponent-details',
        component: () => import('@/views/OpponentDetail'),
    }]
});

