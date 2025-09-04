import type { RouteRecordRaw } from 'vue-router';

const userRoutes: Array<RouteRecordRaw> = [
  {
    path: '/user/register',
    name: 'Register',
    component: () => import('@/views/user/UserCreate.vue'),
  },
];

export default userRoutes;