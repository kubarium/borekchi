import Vue from "vue";
import App from "./App.vue";
//import main from "./main.scss";
import Bulma from "bulma";

export const eventBus = new Vue();

new Vue({
  el: "#app",
  render: h => h(App)
});
