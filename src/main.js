import { createApp } from "vue";
import App from "./App.vue";
import "./assets/style.css";
import router from "./router/router";
import store from "./store/index";

import PrimeVue from "primevue/config";
import Button from "primevue/button";
import TieredMenu from "primevue/tieredmenu";
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import AutoComplete from "primevue/autocomplete";
import MultiSelect from "primevue/multiselect";
import Dropdown from "primevue/dropdown";
import FileUpload from "primevue/fileupload";
import DataView from "primevue/dataview";
import DataViewLayoutOptions from "primevue/dataviewlayoutoptions";
import Rating from "primevue/rating";
import Carousel from "primevue/carousel";
import ToggleButton from "primevue/togglebutton";
import Divider from "primevue/divider";

import "primevue/resources/themes/saga-blue/theme.css"; //theme
//import 'primevue/resources/primevue.min.css'; //core css
import "primeicons/primeicons.css"; //icons

//primeflex imports
import "primeflex/primeflex.css";

createApp(App)
  .component("Button", Button)
  .component("TieredMenu", TieredMenu)
  .component("Card", Card)
  .component("InputText", InputText)
  .component("AutoComplete", AutoComplete)
  .component("MultiSelect", MultiSelect)
  .component("Dropdown", Dropdown)
  .component("FileUpload", FileUpload)
  .component("DataView", DataView)
  .component("DataViewLayoutOptions", DataViewLayoutOptions)
  .component("Rating", Rating)
  .component("Carousel", Carousel)
  .component("ToggleButton", ToggleButton)
  .component("Divider", Divider)
  .use(PrimeVue)
  .use(store)
  .use(router)
  .mount("#app");
