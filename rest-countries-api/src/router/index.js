import Vue from "vue";
import VueRouter from "vue-router";
import CountryOverview from "../views/CountryOverview.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Overview",
    component: CountryOverview
  },
  {
    path: "/details/:id",
    name: "Details",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CountryDetails.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
