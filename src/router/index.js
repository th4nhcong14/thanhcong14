import { createWebHistory, createRouter } from 'vue-router';
const routes = [
    {
        path: '/:pathMatch(.*)*',
        name: 'notfound',
        component: () => import('@/views/NotFound.vue'),
        props: (route) => ({ contactId: parseInt(route.params.id) })
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;
