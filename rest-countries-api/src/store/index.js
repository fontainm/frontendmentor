import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      count: 0,
      countries: [],
      country: null
    };
  },

  mutations: {
    setCountries(state, countries) {
      state.countries = countries;
    },

    setCountry(state, country) {
      state.country = country;
    },

    increment(state) {
      state.count++;
    }
  },

  actions: {
    async getCountries(context) {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      context.commit("setCountries", response.data);
    },

    async getCountry(context, id) {
      const response = await axios.get(
        `https://restcountries.com/v3.1/alpha/${id}`
      );
      context.commit("setCountry", response.data[0]);
    }
  }
});

export default store;
