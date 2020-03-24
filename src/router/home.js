export default {
  path: "/Home",
  name: "home",

  component: () => import("../views/Home.vue"),
  children: [
    {
      path: "/Home/home2",
      name: "home2",

      component: () => import("../views/home2.vue")
    },
    {
      path: "/Home/home3",
      name: "home3",

      component: () => import("../views/home3.vue")
    },
    {
      path: "/Home/city",
      name: "city",

      component: () => import("../views/city.vue")
    }
    // {
    //   path: "/",
    //   name: "root",
    //   redirect: "/Home/home2"
    // }
  ]
};
