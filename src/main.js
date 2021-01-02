import { createApp } from "vue";
import App from "./App.vue";
import "./assets/style.css";
import router from "./router/router";
import store from "./store/index";

import PrimeVue from "primevue/config";
import Button from "primevue/button";
import TieredMenu from "primevue/tieredmenu";
import Card from "primevue/card";

import "primevue/resources/themes/saga-blue/theme.css"; //theme
//import 'primevue/resources/primevue.min.css'; //core css
import "primeicons/primeicons.css"; //icons

createApp(App)
  .component("Button", Button)
  .component("TieredMenu", TieredMenu)
  .component("Card", Card)
  .use(PrimeVue)
  .use(store)
  .use(router)
  .mount("#app");
