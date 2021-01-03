import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home";
import ToateProdusele from "../pages/ToateProdusele";
import AdaugaProdus from "../components/AdaugaProdus";

const routes = [
  { path: "/", component: Home },
  { path: "/ToateProdusele", component: ToateProdusele },
  { path: "/AdaugaProdus", component: AdaugaProdus }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
