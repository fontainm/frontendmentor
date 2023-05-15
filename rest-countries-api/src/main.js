import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import "./styles.scss";
import store from "./store";

Vue.use(Vuex);

Vue.config.productionTip = false;
Vue.prototype.$store = store;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
