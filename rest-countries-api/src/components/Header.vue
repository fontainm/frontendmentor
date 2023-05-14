<template>
  <div class="header">
    <div class="header__wrapper">
      <h1>Where in the world?</h1>
      <button @click="toggleTheme">Dark Mode</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleTheme() {
      let theme = localStorage.getItem("user-theme");
      theme = theme === "dark-theme" ? "light-theme" : "dark-theme";
      localStorage.setItem("user-theme", theme);
      document.documentElement.className = theme;
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  background: var(--color-bg-navbar);
  padding: 1rem;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    max-width: 1280px;
  }

  h1 {
    font-size: 16px;
    font-weight: 800;
  }
}
</style>
