import { createStore } from "vuex";
import axios from "axios";

const fields =
  "?fields=name,capital,currencies,flags,population,region,cca3,subregion,capital,tld,currencies,languages";

const store = createStore({
  state() {
    return {
      loading: false,
      countries: [],
      country: null,
    };
  },

  mutations: {
    setLoading(state, loading) {
      state.loading = loading;
    },

    setCountries(state, countries) {
      state.countries = countries;
    },

    setCountry(state, country) {
      state.country = country;
    },
  },

  actions: {
    async getCountries(context) {
      context.commit("setLoading", true);
      const response = await axios.get(
        "https://restcountries.com/v3.1/all" + fields
      );
      context.commit("setCountries", response.data);
      context.commit("setLoading", false);
    },

    async getCountry(context, id) {
      context.commit("setLoading", true);
      const response = await axios.get(
        `https://restcountries.com/v3.1/alpha/${id}` + fields
      );
      context.commit("setCountry", response.data);
      context.commit("setLoading", false);
    },

    async getCountriesFromRegion(context, region) {
      context.commit("setLoading", true);
      const response = await axios.get(
        `https://restcountries.com/v3.1/region/${region}` + fields
      );
      context.commit("setCountries", response.data);
      context.commit("setLoading", false);
    },
  },
});

export default store;
