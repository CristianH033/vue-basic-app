import Vue from "vue";
import VueRouter from "vue-router";

import Inicio from "../views/Inicio.vue";
import Usuarios from "../views/Usuarios.vue";
import Fotos from "../views/Fotos.vue";
import Posts from "../views/Posts.vue";
import Vigencias from "../views/Vigencias.vue";
import Vigencia from "../views/Vigencia.vue";

// const Inicio = () =>
//   import(/* webpackChunkName: "views/InicioView" */ "../views/Inicio.vue");
// const Usuarios = () =>
//   import(/* webpackChunkName: "views/UsuariosView" */ "../views/Usuarios.vue");
// const Fotos = () =>
//   import(/* webpackChunkName: "views/FotosView" */ "../views/Fotos.vue");
// const Posts = () =>
//   import(/* webpackChunkName: "views/PostsView" */ "../views/Posts.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: Inicio
  },
  {
    path: "/usuarios",
    name: "Usuarios",
    component: Usuarios
  },
  {
    path: "/fotos",
    name: "Fotos",
    component: Fotos
  },
  {
    path: "/posts",
    name: "Posts",
    component: Posts
  },
  {
    path: "/vigencias",
    name: "Vigencias",
    component: Vigencias
  },
  {
    path: "/vigencias/:id",
    name: "Vigencia",
    component: Vigencia
  }
];

// () => import(/* webpackChunkName: "about" */ "../views/Posts.vue");

const router = new VueRouter({
  routes
});

export default router;
