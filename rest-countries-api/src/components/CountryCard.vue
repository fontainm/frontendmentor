<template>
  <div class="country">
    {{ country.name }}
    <router-link to="/details">{{ country.name }}</router-link>
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

<style scoped lang="scss"></style>
