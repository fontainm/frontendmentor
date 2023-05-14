<template>
  <div class="content">
    <Header />
    <div class="content__wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header,
  },

  mounted() {
    let theme = localStorage.getItem("user-theme");
    document.documentElement.className = theme;
  },
};
</script>

<style lang="scss">
.content {
  background: var(--color-bg-content);
  min-height: 100vh;

  &__wrapper {
    padding: 1rem;
    max-width: 1280px;
    margin: auto;
  }
}
</style>
