<template>
  <div class="details">
    <router-link class="details__back" to="/"> ← Back </router-link>
    <div v-if="country" class="details__content">
      <div>
        <img
          :src="country.flags.png"
          :alt="country.flags.alt"
          width="200"
          height="120"
        />
      </div>
      <div>
        <h3>{{ country.name.common }}</h3>
        <div>
          <ul>
            <li v-for="data in countryData" :key="data.name">
              <strong>{{ data.name }}:</strong> {{ data.value }}
            </li>
          </ul>
        </div>
        <div>
          <strong>Border countries: </strong
          ><span v-for="borderCountry in country.borders" :key="borderCountry"
            >{{ borderCountry }},
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      country: null
    };
  },

  mounted() {
    this.getCountry(this.$route.params.id);
  },

  computed: {
    countryData() {
      return [
        { name: "Native Name", value: this.country.nativeName },
        { name: "Population", value: this.country.population },
        { name: "Region", value: this.country.region },
        { name: "Sub Region", value: this.country.subregion },
        { name: "Capital", value: this.country.capital },
        { name: "Top Level Domain", value: this.country.tld },
        { name: "Currencies", value: this.country.currencies },
        { name: "Languages", value: this.country.languages }
      ];
    }
  },

  methods: {
    async getCountry(id) {
      const response = await axios.get(
        `https://restcountries.com/v3.1/alpha/${id}`
      );
      this.country = response.data[0];
      console.log(this.country);
    }
  }
};
</script>

<style scoped lang="scss">
.details {
  &__back {
    display: inline-block;
    text-decoration: none;
    box-shadow: var(--box-shadow);
    padding: 1rem 2rem;
    background: var(--color-bg-navbar);
    font-size: 12px;
  }

  &__content {
    display: flex;
  }
}
</style>
