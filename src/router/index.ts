import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  RouterView,
} from "vue-router";
import Home from "../views/Home.vue";
import UserNew from "../views/UserNew.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/user",
    component: RouterView,
    children: [
      {
        path: "new",
        name: "UserNew",
        component: UserNew,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
