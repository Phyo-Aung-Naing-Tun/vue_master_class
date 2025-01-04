import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import { h } from "vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/project",
      name: "project",
      component: () => import("@/views/ProjectView.vue"),
    },
    {
      path: "/project/:id",
      name: "single-project",
      component: () => import("@/views/ProjectOneView.vue"),
    },
    {
      path: "/:catchAll(.*)*",
      name: "NotFound",
      component: h("p", { style: "color: red" }, "404 Not Found"),
    },
  ],
});

export default router;
