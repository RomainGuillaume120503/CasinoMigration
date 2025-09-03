import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

// Import layout
import SharedLayout from "@/components/SharedLayout.vue";
import UserCreate from '@/components/UserCreate.vue';

const routes: Array<RouteRecordRaw> = [
  // Routes avec le layout partagé
  {
    path: '/',
    component: SharedLayout,
    children: [
      {
        path: '',
        redirect: 'register',
      },
      {
        path: 'register',
        name: 'Register',
        component: UserCreate,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Gestion d'erreur de navigation
router.onError((error) => {
  console.error("Routing Error:", error);
  router.push({ name: "Error", params: { error: error.message || "Erreur inconnue" } });
});

export default router;