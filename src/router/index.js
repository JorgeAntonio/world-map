import { createRouter, createWebHashHistory } from "vue-router";
import CountryDetail from "../components/CountryDetail.vue";
import BaseLayout from "../layouts/BaseLayout.vue";
import Home from "../pages/Home.vue";
import ViewOne from "../pages/ViewOne.vue";
import ViewTwo from "../pages/ViewTwo.vue";

const routes = [
  {
    path: "/",
    component: BaseLayout,
    children: [
      {
        path: "",
        component: Home,
        children: [
          {
            path: "country",
            name: "country",
            component: CountryDetail,
          },
        ],
      },
      { path: "/view-one", component: ViewOne },
      { path: "/view-two", component: ViewTwo },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
