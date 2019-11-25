import Vue from "vue";
import VueRouter from "vue-router";

import App from "./components/App.vue";
import Auth from "./components/Auth.vue";
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
    { path: "/", component: Home, name: "home", meta: { requiresAuth: true } },
    {
      path: "/deets",
      component: Deets,
      name: "deets",
      meta: { requiresAuth: true }
    },
    {
      path: "/faq",
      component: Faq,
      name: "faq",
      meta: { requiresAuth: true }
    },
    {
      path: "/registry",
      component: Registry,
      name: "buy us stuff",
      meta: { requiresAuth: true }
    },
    {
      path: "/rsvp",
      component: Rsvp,
      name: "rsvp",
      meta: { requiresAuth: true }
    },
    { path: "/auth", component: Auth, name: "auth" }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    // lol client-side auth. pls don't hack me
    if (localStorage.pw != "thepriceisright") {
      next("/auth");
    } else {
      next();
    }
  } else {
    next();
  }
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
