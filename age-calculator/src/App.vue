<template>
  <div id="app">
    <AgeCalculator />
  </div>
</template>

<script>
import AgeCalculator from "./components/AgeCalculator.vue";

export default {
  name: "App",
  components: {
    AgeCalculator,
  },
};
</script>

<style>
#app {
  background: hsl(0, 0%, 94%);
  min-height: 100vh;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
