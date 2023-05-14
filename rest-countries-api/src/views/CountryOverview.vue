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
      </select>
    </div>
    <CountryCard
      v-for="country in countries"
      :key="country.id"
      :country="country"
    />
  </div>
</template>

<script>
import CountryCard from "@/components/CountryCard.vue";

export default {
  name: "CountryOverview",

  components: {
    CountryCard,
  },

  data() {
    return {
      searchTerm: "",
      continent: "",
      countries: [
        {
          id: 0,
          name: "Austria",
        },
        {
          id: 1,
          name: "Switzerland",
        },
        {
          id: 2,
          name: "Belgium",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.overview {
  &__filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__input {
    background: var(--color-bg-header);
    padding: 0.5rem;
    font-size: 12px;
  }
}
</style>