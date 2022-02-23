import { createApp } from "vue";
import App from "./App.vue";
// import of the router, without this import the router can not be used inside the app
import router from "./router";

// import of the css files
import "./assets/css/style.css";
import "./assets/font_style.css";

createApp(App).use(router).mount("#app");
