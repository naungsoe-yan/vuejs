import Vue from "vue";
import Vuex from "vuex";
import VueI18n from "vue-i18n";
import applicationModule from "./modules/application/store";

// Module registration
Vue.use(Vuex);
const store = new Vuex.Store();
store.registerModule("application", applicationModule);

// Router and routes
import App from "./App";
import LoginForm from "modules/authentication/components/LoginForm";

const Dashboard = () => import("modules/dashboard/components/Dashboard.vue");
const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: LoginForm },
    { path: "/dashboard", component: Dashboard },
    { path: "/assignment/:id", component: AssignmentViewer }
  ]
});

// Localization
const messages = {
  en: {
    message: { "dashboard_label_title": "Dashboard" }
  },
  zh: {
    message: { "dashboard_label_title": "仪表板" }
  }
}
const i18n = new VueI18n({
  locale: "en",
  messages
});

// Application
const app = new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");