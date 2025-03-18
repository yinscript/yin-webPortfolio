import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Terminal from "./pages/Terminal.vue";

const routes = [
    { path: "/terminal", component: Terminal },
    { path: "/", component: Home },
    { path: "/about", component: About },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth', // Enables smooth scrolling
            };
        }
        return { top: 0 };
    },
});

export default router;

