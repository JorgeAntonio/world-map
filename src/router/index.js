import { createRouter, createWebHashHistory } from "vue-router";
import BaseLayout from "../layouts/BaseLayout.vue";

const routes = [
  {
    path: "/",
    component: BaseLayout,
    children: [
      { path: "", component: () => import("../pages/Home.vue") },
      { path: "/view-one", component: () => import("../pages/ViewOne.vue") },
      { path: "/view-two", component: () => import("../pages/ViewTwo.vue") },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
