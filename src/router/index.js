import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "home", component: () => import("@/components/HomePage") },

  {
    path: "/about",
    name: "about",
    component: () => import("@/components/AboutPage"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/components/ContactPage"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
