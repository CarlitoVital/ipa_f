import { createApp } from "vue";
import App from "./App.vue";
// import of the router, without this import the router can not be used inside the app
import router from "./router";

createApp(App).use(router).mount("#app");
