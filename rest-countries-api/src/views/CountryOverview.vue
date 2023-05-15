<template>
  <div class="overview">
    <div class="overview__filter">
      <input
        type="text"
        v-model="searchTerm"
        class="overview__input"
        placeholder="Search for country"
      />
      <select
        v-model="continent"
        class="overview__input"
        placeholder="Filter by region"
      >
        <option value="" disabled selected hidden>Filter by region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
    <div class="overview__list">
      <CountryCard
        v-for="country in countries"
        :key="country.id"
        :country="country"
      />
    </div>
  </div>
</template>

<script>
import CountryCard from "@/components/CountryCard.vue";
import axios from "axios";

export default {
  name: "CountryOverview",

  components: {
    CountryCard
  },

  data() {
    return {
      searchTerm: "",
      continent: "",
      countries: []
    };
  },

  mounted() {
    this.getCountries();
  },

  methods: {
    async getCountries() {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      this.countries = response.data;
    }
  }
};
</script>

<style scoped lang="scss">
.overview {
  &__filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0 2rem 0;
  }

  &__input {
    background: var(--color-bg-navbar);
    border: 0;
    box-shadow: var(--box-shadow);
    font-size: 12px;
    color: var(--color-text-light);
    border-radius: 3px;
    border: 1rem solid var(--color-bg-navbar);
    width: 300px;

    &:focus-visible {
      outline: 0;
    }

    &::placeholder,
    &:disabled {
      color: var(--color-text-light);
    }
  }

  select {
    width: 140px;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: -1rem;
  }
}
</style>
