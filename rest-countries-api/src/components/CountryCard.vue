<template>
  <div class="country">
    <router-link to="/details" class="country__card">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/255px-Flag_of_Austria.svg.png"
        alt=""
      />
      <div class="country__body">
        <h3>{{ country.name }}</h3>
        <p><strong>Population:</strong>1</p>
        <p><strong>Region:</strong>1</p>
        <p><strong>Capital:</strong>1</p>
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
  max-width: 200px;
  background: var(--color-bg-navbar);
  border-radius: 3px;
  box-shadow: var(--box-shadow);
  overflow: hidden;

  &__card {
    display: block;
    text-decoration: none;

    img {
      height: 120px;
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
      font-size: 12px;
      color: var(--color-text-light);

      strong {
        font-weight: 600;
        color: var(--color-text);
      }
    }
  }
}
</style>
