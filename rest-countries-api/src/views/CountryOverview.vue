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
        v-model="region"
        class="overview__input"
        placeholder="Filter by region"
        @change="filterCountries"
      >
        <option value="" disabled selected hidden>Filter by region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
        <option value="">Show all</option>
      </select>
    </div>
    <div v-if="this.$store.state.loading">
      <LoadingSpinner />
    </div>
    <div v-else class="overview__list">
      <CountryCard
        v-for="country in this.$store.state.countries"
        :key="country.id"
        :country="country"
      />
    </div>
  </div>
</template>

<script>
import CountryCard from "@/components/CountryCard.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

export default {
  name: "CountryOverview",

  components: {
    CountryCard,
    LoadingSpinner
  },

  data() {
    return {
      searchTerm: "",
      region: "",
      countries: [],
    };
  },

  mounted() {
    this.$store.dispatch("getCountries");
  },

  methods: {
    filterCountries() {
      if (this.region) {
        this.$store.dispatch("getCountriesFromRegion", this.region);
      } else {
        this.$store.dispatch("getCountries");
      }
    },
  },
};
</script>

<style scoped lang="scss">
.overview {
  &__filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 2rem 0;
  }

  &__input {
    background: var(--color-bg-navbar);
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
