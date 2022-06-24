import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CarrinhoView from "../views/CarrinhoView.vue";
import AdminView from "../views/AdminView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/carrinho",
      name: "carrinho",
      component: CarrinhoView,
    },
    {
      path: "/admin",
      name: "admin",
      component: AdminView,
    },
  ],
});

export default router;
