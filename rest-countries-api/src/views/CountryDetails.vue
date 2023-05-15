<template>
  <div class="details">
    <router-link class="details__back" to="/"> ← Back </router-link>
    <div v-if="this.$store.state.loading">
      <LoadingSpinner />
    </div>
    <div v-else-if="country" class="details__content">
      <div class="details__flag">
        <img :src="country.flags.svg" :alt="country.flags.alt" />
      </div>
      <div class="details__info">
        <h3>{{ country.name.common }}</h3>
        <div>
          <ul>
            <li v-for="data in countryData" :key="data.name">
              <strong>{{ data.name }}:</strong> {{ data.value }}
            </li>
          </ul>
        </div>
        <div class="details__border">
          <span><strong>Border countries: </strong></span>
          <router-link
            v-for="borderingCountry in country.borders"
            :key="borderingCountry.id"
            :to="`/details/${borderingCountry}`"
            class="details__border-country"
          >
            {{ getCountry(borderingCountry)?.name.common }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingSpinner from "@/components/LoadingSpinner.vue";

export default {
  components: {
    LoadingSpinner
  },

  mounted() {
    this.$store.dispatch("getCountry", this.$route.params.id);
  },

  computed: {
    country() {
      return this.$store.state.country;
    },

    countryData() {
      return [
        {
          name: "Native Name",
          value: Object.values(this.country.name.nativeName)[0].official
        },
        {
          name: "Population",
          value: new Intl.NumberFormat("en-GB", {
            maximumSignificantDigits: 3
          }).format(this.country.population)
        },
        { name: "Region", value: this.country.region },
        { name: "Sub Region", value: this.country.subregion },
        { name: "Capital", value: this.country.capital[0] },
        { name: "Top Level Domain", value: this.country.tld[0] },
        {
          name: "Currencies",
          value: Object.values(this.country.currencies)[0].name
        },
        {
          name: "Languages",
          value: Object.values(this.country.languages).join(", ")
        }
      ];
    }
  },

  methods: {
    getCountry(id) {
      return this.$store.state.countries.find(country => country.cca3 === id);
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
    border-radius: 3px;
  }

  &__content {
    display: flex;
    margin-top: 2rem;
  }

  &__flag {
    width: 50%;
    margin-right: 1rem;

    img {
      width: 100%;
    }
  }

  &__info {
    width: 50%;
    font-size: 12px;

    h3 {
      font-size: 24px;
      margin: 0 0 1rem 0;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      columns: 2;

      li {
        margin-bottom: 0.5rem;
      }
    }

    strong {
      font-weight: 600;
    }
  }

  &__border {
    margin-top: 2rem;
  }

  &__border-country {
    font-size: 12px;
    box-shadow: var(--box-shadow);
    background: var(--color-bg-navbar);
    padding: 3px 1rem;
    margin: 0 4px 4px 0;
    display: inline-block;
    text-decoration: none;
  }
}
</style>
