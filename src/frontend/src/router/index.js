import { createRouter, createWebHistory } from 'vue-router';

import DashboardView from '@/views/DashboardView.vue';
import MarketingView from '@/views/MarketingView.vue';
import UsersView from '@/views/UsersView.vue';

const routes = [

    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardView
    },
    {
        path: '/marketing',
        name: 'Marketing',
        component: MarketingView
    },
    {
        path: '/users',
        name: 'Users',
        component: UsersView
    }

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
