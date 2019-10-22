import Vue from "vue";
import VueRouter from "vue-router";

import App from "./components/App.vue";
import Home from "./components/Home.vue";
import Deets from "./components/Deets.vue";
import Faq from "./components/Faq.vue";
import Registry from "./components/Registry.vue";
import Rsvp from "./components/Rsvp.vue";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    { path: "/", component: Home, name: "home" },
    { path: "/deets", component: Deets, name: "deets" },
    { path: "/faq", component: Faq, name: "faq" },
    { path: "/registry", component: Registry, name: "buy us stuff" },
    { path: "/rsvp", component: Rsvp, name: "rsvp" }
  ]
});

// Update page title based on route name.
router.afterEach(to => {
  document.title = to.name;
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
