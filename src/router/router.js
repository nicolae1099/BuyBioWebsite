import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home";
import ToateProdusele from "../pages/ToateProdusele";
import AdaugaProdus from "../components/AdaugaProdus";
import Fructe from "../pages/Fructe";

const routes = [
  { path: "/", component: Home },
  { path: "/ToateProdusele", component: ToateProdusele },
  { path: "/AdaugaProdus", component: AdaugaProdus },
  { path: "/Fructe", component: Fructe }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
