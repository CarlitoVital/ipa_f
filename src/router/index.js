// import of all the vue views
import { createRouter, createWebHistory } from "vue-router";
import LinkList from "../views/LinkList.vue";
import Info from "../views/Info.vue";
import LinkCreate from "../views/LinkCreate.vue";
import LinkEdit from "../views/LinkEdit.vue";
import LinkDetails from "../views/LinkDetails.vue";
import Impressum from "../views/Impressum.vue";

// array of all pathe definitions, so they can be used inside the app
const routes = [
  {
    path: "/",
    name: "LinkList",
    component: LinkList,
  },
  {
    path: "/link/info",
    name: "Info",
    component: Info,
  },
  {
    path: "/link/create",
    name: "LinkCreate",
    component: LinkCreate,
  },
  {
    path: "/link/:id",
    name: "LinkDetails",
    props: true,
    component: LinkDetails,
  },
  {
    path: "/link/:id/edit",
    name: "LinkEdit",
    props: true,
    component: LinkEdit,
  },
  {
    path: "/link/impressum",
    name: "Impressum",
    component: Impressum,
  },
];

// creation of the router
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
