import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LivroView from "../views/LivroView.vue";
import LoginView from "../views/LoginView.vue";
import EditoraView from "../views/EditoraView.vue";
import CategoriaView from "../views/CategoriaView.vue";
import AutorView from "../views/AutorView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/livros",
      name: "livros",
      component: LivroView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/editora",
      name: "editora",
      component: EditoraView,
    },
    {
      path: "/categoria",
      name: "categoria",
      component: CategoriaView,
    },
    {
      path: "/autor",
      name: "autor",
      component: AutorView,
    },
  ],
});

export default router;
