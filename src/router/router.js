import { createRouter, createWebHistory } from "vue-router";
import MonthlyRevenue from "../views/MonthlyRevenue.vue";
import HomePage from "../views/HomePage.vue";
const routes = [
  { path: "/", name: "home", component: HomePage, meta: { title: "主頁" } },
  {
    path: "/monthly-revenue",
    name: "monthly-revenue",
    component: MonthlyRevenue,
    meta: { title: "每月營業收入彙總表" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
