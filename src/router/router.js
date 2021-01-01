import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";

const routes = [
  { path: "/", component: Home },
  { path: "/about-us", component: AboutUs }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
