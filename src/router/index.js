import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from "./routes.js";

Vue.use(VueRouter);

export default new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        if (to.hash) {
            return { selector: to.hash, behavior: 'smooth' };
        }
        return { x: 0, y: 0 }
    },
});