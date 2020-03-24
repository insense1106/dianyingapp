import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./home";
Vue.use(VueRouter);

const routes = [
  {
    path: "/about",
    name: "About",

    component: () => import("../views/About.vue")
  },
  {
    path: "/user",
    name: "user",

    component: () => import("../views/user.vue")
  },
  Home,
  {
    path: "/*",
    redirect: "/Home"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
