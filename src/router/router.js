import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home";
import ToateProdusele from "../pages/ToateProdusele";

const routes = [
  { path: "/", component: Home },
  { path: "/ToateProdusele", component: ToateProdusele }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
