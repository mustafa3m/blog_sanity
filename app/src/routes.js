import Home from "./views/Home.vue";
import About from "./views/About.vue";
import NotFound from "../components/NotFound.vue";

export default [
  {
    name: "about",
    path: "/:about",
    component: About,
  },
  {
    name: "home",
    path: "/",
    component: Home,
  },
  {
    name: "error",
    path: "/:notFound(.*)",
    component: NotFound,
    alias: "/articles/:notFound(.*)",
  },
];
