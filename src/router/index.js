import Vue from "vue";
import VueRouter from "vue-router";
import PoleSingle from "../views/PoleSingle.vue";
import StartPage from "../views/StartPage.vue";
import PageNotFound from "../views/PageNotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "StartPage",
    component: StartPage,
  },
  {
    path: "/pole-single",
    name: "PoleSingle",
    component: PoleSingle,
    children: [
      {
        path: "/compulsories/:id",
        name: "CompulsoryPage",
        component: () =>
          import(
            /* webpackChunkName: "bundle-compulsory" */ "../views/CompulsoryPage.vue"
          ),
        props: (route) => ({
          id: route.params.id,
        }),
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "bundle-about" */ "../views/About.vue"),
  },
  {
    path: "*",
    component: PageNotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
