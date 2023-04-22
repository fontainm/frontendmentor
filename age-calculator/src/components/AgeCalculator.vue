<template>
  <div class="ac">
    <ValidationObserver ref="form" v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(calculateAge)">
        <div class="ac__input">
          <ValidationProvider
            class="ac__input--field"
            rules="required|date:day"
            vid="day"
            v-slot="{ errors }"
          >
            <label for="day">Day</label>
            <input
              name="day"
              v-model="day"
              placeholder="DD"
              type="number"
              @blur="formatDay()"
            />
            <span>{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider
            class="ac__input--field"
            rules="required|date:month"
            vid="month"
            v-slot="{ errors }"
          >
            <label for="month">Month</label>
            <input
              name="month"
              v-model="month"
              placeholder="MM"
              type="number"
              @blur="formatMonth()"
            />
            <span>{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider
            rules="required|date:year"
            class="ac__input--field"
            vid="year"
            v-slot="{ errors }"
          >
            <label for="year">Year</label>
            <input
              name="year"
              v-model="year"
              placeholder="YYYY"
              type="number"
            />
            <span>{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="ac__submit">
          <div class="ac__submit--line"></div>
          <button type="submit" class="ac__submit--button">
            <img src="icon-arrow.svg" />
          </button>
        </div>
      </form>
    </ValidationObserver>
    <div class="ac__output">
      <div>
        <span>{{ result.years }}</span> years
      </div>
      <div>
        <span>{{ result.months }}</span> months
      </div>
      <div>
        <span>{{ result.days }}</span> days
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "AgeCalculator",

  data() {
    return {
      day: "",
      month: "",
      year: "",
      result: {
        years: "--",
        months: "--",
        days: "--",
      },
    };
  },

  methods: {
    calculateAge() {
      let birthDate = moment({
        year: this.year,
        month: this.month - 1,
        day: this.day,
      });

      if (!birthDate.isValid()) {
        this.displayError("Must be a valid date");
        return;
      }

      let difference = moment().diff(birthDate, "ms");
      if (difference < 0) {
        this.displayError("Must be in the past");
        return;
      }

      let duration = moment.duration(difference);
      this.result.years = duration.years();
      this.result.months = duration.months();
      this.result.days = duration.days();
    },

    displayError(message) {
      this.$refs.form.setErrors({
        day: [message],
      });
    },

    formatDay() {
      this.day = this.makeDoubleDigits(this.day);
    },

    formatMonth() {
      this.month = this.makeDoubleDigits(this.month);
    },

    makeDoubleDigits(value) {
      return ("0" + value).slice(-2);
    },
  },
};
</script>

<style scoped lang="scss">
.ac {
  background: white;
  border-radius: 20px 20px 120px 20px;
  padding: 2rem;
  position: relative;
  width: 520px;
  max-width: 100%;

  &__input {
    display: flex;

    &--field {
      display: flex;
      flex-direction: column;
      margin-right: 12px;
      width: 33%;
      max-width: 110px;

      label {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 12px;
        color: var(--color-smoke-grey);
      }

      input {
        border: 1px solid var(--color-light-grey);
        border-radius: 4px;
        font-size: 20px;
        padding: 10px;
        font-weight: 700;
        margin: 6px 0;

        &::placeholder {
          color: var(--color-light-grey);
        }
      }

      span {
        color: var(--color-danger);
        font-size: 10px;
        font-style: italic;
      }
    }
  }

  &__submit {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    &--line {
      height: 1px;
      width: calc(100% - 70px);
      background: var(--color-light-grey);
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
        background: var(--color-black);
      }
    }
  }

  &__output {
    font-size: 60px;
    font-weight: 800;
    font-style: italic;

    span {
      color: var(--color-primary);
    }
  }

  @media screen and (max-width: 767px) {
    padding: 1rem;

    &__output {
      font-size: 40px;
    }
  }
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
