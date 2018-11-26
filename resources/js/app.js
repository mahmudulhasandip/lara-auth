/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue");
import VueRouter from "vue-router";
import ApiLogin from "./components/ApiLoginComponent.vue";
import ApiHome from "./components/HomeComponent.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/api/login",
        component: ApiLogin
    },
    {
        path: "/api/home",
        component: ApiHome
    }
];

const router = new VueRouter({
    routes,
    mode: "history"
});

const app = new Vue({
    el: "#app",
    router,
    components: {
        // ApiLogin
    }
});
