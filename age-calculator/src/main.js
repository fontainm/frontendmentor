import Vue from "vue";
import App from "./App.vue";
import "./assets/styles.scss";
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  setInteractionMode,
} from "vee-validate";
import { required } from "vee-validate/dist/rules";

Vue.config.productionTip = false;

// Override the default message.
extend("required", {
  ...required,
  message: "This field is required",
});

const dateValidator = {
  message: (field, args) => {
    if (args[0] === "year") {
      return "Must be in the past";
    }
    return `Must be a valid ${field}`;
  },
  validate(value, args) {
    switch (args[0]) {
      case "day":
        return value >= 1 && value <= 31;
      case "month":
        return value >= 1 && value <= 12;
      case "year":
        return value <= 2023;
    }
    return false;
  },
};

extend("date", dateValidator);

setInteractionMode("eager");

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
