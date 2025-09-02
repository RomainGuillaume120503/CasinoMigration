import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

// Import layout
import SharedLayout from "@/components/SharedLayout.vue";

const routes: Array<RouteRecordRaw> = [
  // Routes avec le layout partagé
  
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