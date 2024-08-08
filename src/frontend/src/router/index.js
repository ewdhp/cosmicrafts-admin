import { createRouter, createWebHistory } from 'vue-router';

import DashboardView from '@/views/dashboard/DashboardView.vue';
import MarkMainView from '@/views/marketing/MarkMainView.vue';
import UsersView from '@/views/users/UsersView.vue';

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: DashboardView
    },
    {
        path: '/marketing',
        name: 'Marketing',
        component: MarkMainView
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
