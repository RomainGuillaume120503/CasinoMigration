// src/router/index.ts
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

//import adminRoutes from "@/routers/routes/admin";
import userRoutes from "@/routers/routes/user";
//import gameRoutes from "@/routers/routes/game";

import MainLayout from "@/components/MainLayout.vue";

const routes: Array<RouteRecordRaw> = [
  // Une seule route parent qui gère le layout principal
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        redirect: '/user/register', // Redirection vers le bon chemin
      },
      ...userRoutes,
      //...gameRoutes,
      //...adminRoutes,
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.onError((error) => {
  console.error("Routing Error:", error);
});

export default router;