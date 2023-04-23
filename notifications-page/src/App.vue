<template>
  <div id="app">
    <NotificationsList />
  </div>
</template>

<script>
import NotificationsList from "./components/NotificationsList.vue";

export default {
  name: "App",
  components: {
    NotificationsList,
  },
};
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  background: var(--color-background);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
