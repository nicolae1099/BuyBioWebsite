import { createApp } from "vue";
import App from "./App.vue";
import "./assets/style.css";
import router from "./router/router";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import TieredMenu from "primevue/tieredmenu";

import "primevue/resources/themes/saga-blue/theme.css"; //theme
//import 'primevue/resources/primevue.min.css'; //core css
import "primeicons/primeicons.css"; //icons

createApp(App)
  .component("Button", Button)
  .component("TieredMenu", TieredMenu)
  .use(PrimeVue)
  .use(router)
  .mount("#app");
