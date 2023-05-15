<template>
  <div class="loading">
    <span class="loading__spinner"></span>
  </div>
</template>

<style scoped lang="scss">
.loading {
  display: flex;
  align-items: center;
  height: 200px;
  justify-content: center;

  &__spinner {
    width: 16px;
    height: 16px;
    border: 2px solid var(--color-text);
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>