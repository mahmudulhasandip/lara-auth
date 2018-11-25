/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue");
// import ApiLogin from "./components/ApiLoginComponent.Vue";

Vue.component("login-component", require("./components/ApiLoginComponent.vue"));

const app = new Vue({
    el: "#app",
    components: {
        // ApiLogin
    }
});
