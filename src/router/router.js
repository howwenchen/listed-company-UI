import { createRouter, createWebHistory } from "vue-router";
import MonthlyRevenue from "../views/MonthlyRevenue.vue";
import HomePage from "../views/HomePage.vue";
const routes = [
  { path: "/", name: "home", component: HomePage, props: true },
  { path: "/monthly-revenue", component: MonthlyRevenue },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
