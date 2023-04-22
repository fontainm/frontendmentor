<template>
  <div class="ac">
    <div class="ac__input"></div>
    <div class="ac__submit">
      <div class="ac__submit--line"></div>
      <button class="ac__submit--button">
        <img src="icon-arrow.svg" />
      </button>
    </div>
    <div class="ac__output">
      <div><span>--</span> years</div>
      <div><span>--</span> months</div>
      <div><span>--</span> days</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AgeCalculator",

  data() {
    return {
      firstName: "",
      lastName: "",
    };
  },
};
</script>

<style scoped lang="scss">
.ac {
  background: white;
  border-radius: 30px 30px 60px 30px;
  padding: 2rem;
  position: relative;

  &__submit {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    &--line {
      height: 1px;
      width: calc(100% - 70px);
      background: hsl(0, 0%, 86%);
    }

    &--button {
      background: var(--color-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 70px;
      height: 70px;
      border: 0;
      border-radius: 50%;
      transition: background 0.3s ease;
      cursor: pointer;

      &:hover {
        background: black;
      }
    }
  }

  &__output {
    font-size: 52px;
    font-weight: 800;
    font-style: italic;

    span {
      color: var(--color-primary);
    }
  }
}
</style>
