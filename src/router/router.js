import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home";
import ToateProdusele from "../pages/ToateProdusele";
import AdaugaProdus from "../components/AdaugaProdus";
import Fructe from "../pages/Fructe";
import Legume from "../pages/Legume";
import Branzeturi from "../pages/Branzeturi";
import Prajituri from "../pages/Prajituri";

const routes = [
  { path: "/", component: Home },
  { path: "/ToateProdusele", component: ToateProdusele },
  { path: "/AdaugaProdus", component: AdaugaProdus },
  { path: "/Fructe", component: Fructe },
  { path: "/Legume", component: Legume },
  { path: "/Branzeturi", component: Branzeturi },
  { path: "/Prajituri", component: Prajituri }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
