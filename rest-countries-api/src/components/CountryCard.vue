<template>
  <div class="country">
    <router-link :to="`/details/${country.cca2}`" class="country__card">
      <img
        :src="country.flags.png"
        :alt="country.flags.alt"
        width="200"
        height="120"
      />
      <div class="country__body">
        <h3>{{ country.name.common }}</h3>
        <p>
          <strong>Population:</strong><span>{{ country.population }}</span>
        </p>
        <p>
          <strong>Region:</strong><span>{{ country.region }}</span>
        </p>
        <p>
          <strong>Capital:</strong>
          <span v-for="capital in country.capital" :key="capital">{{
            capital
          }}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CountryCard",
  props: {
    country: Object
  }
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

    img {
      height: 120px;
      width: 100%;
    }
  }

  &__body {
    padding: 1rem;

    h3 {
      color: var(--color-text);
      font-size: 16px;
      margin: 0 0 0.5rem 0;
    }

    p {
      margin: 0 0 5px 0;
      color: var(--color-text-light);
      font-size: 12px;

      span {
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
