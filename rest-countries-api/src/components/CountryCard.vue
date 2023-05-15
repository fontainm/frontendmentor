<template>
  <div class="country">
    <router-link :to="`/details/${country.cca3}`" class="country__card">
      <img
        :src="country.flags.svg"
        :alt="country.flags.alt"
        width="250"
        height="150"
      />
      <div class="country__body">
        <h3>{{ country.name.common }}</h3>
        <ul>
          <li v-for="data in countryData" :key="data.name">
            <strong>{{ data.name }}:</strong> {{ data.value }}
          </li>
        </ul>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CountryCard",

  props: {
    country: Object,
  },

  computed: {
    countryData() {
      return [
        {
          name: "Population",
          value: new Intl.NumberFormat("en-GB", {
            maximumSignificantDigits: 3,
          }).format(this.country.population),
        },
        {
          name: "Region",
          value: this.country.region,
        },
        {
          name: "Capital",
          value: this.country.capital.join(", "),
        },
      ];
    },
  },
};
</script>

<style scoped lang="scss">
.country {
  width: 20%;

  &__card {
    box-shadow: var(--box-shadow);
    border-radius: 3px;
    overflow: hidden;
    display: block;
    text-decoration: none;
    margin: 1rem;
    background: var(--color-bg-navbar);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-10px);
    }

    img {
      height: 150px;
      width: 100%;
      object-fit: cover;
    }
  }

  &__body {
    padding: 1rem;

    h3 {
      color: var(--color-text);
      font-size: 16px;
      margin: 0 0 0.5rem 0;
    }

    ul {
      color: var(--color-text-light);
      font-size: 12px;
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        margin-bottom: 0.5rem;
        font-size: 12px;
      }

      strong {
        font-weight: 600;
        color: var(--color-text);
        margin-right: 2px;
      }
    }
  }
}

@media (max-width: 1199px) {
  .country {
    width: 25%;
  }
}

@media (max-width: 991px) {
  .country {
    width: 33.3%;
  }
}

@media (max-width: 767px) {
  .country {
    width: 50%;
  }
}

@media (max-width: 575px) {
  .country {
    width: 100%;
  }
}
</style>
