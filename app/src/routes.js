import Home from './views/Home.vue';
import About from "./views/About.vue";

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
];
