<template>
  <div id="app">
    <div class="header">
      <h1>IP Address Tracker</h1>
      <form @submit.prevent="submit">
        <input type="text" v-model="formIP" />
        <button type="submit">›</button>
      </form>
      <div class="info">
        <div class="section">
          <h3>IP Address</h3>
          <span>{{ ip }}</span>
        </div>
        <div class="section">
          <h3>Location</h3>
          <span>{{ location }}</span>
        </div>
        <div class="section">
          <h3>Timezone</h3>
          <span>{{ time }}</span>
        </div>
        <div class="section">
          <h3>ISP</h3>
          <span>{{ isp }}</span>
        </div>
      </div>
    </div>
    <Map ref="mapComponent" />
  </div>
</template>

<script>
import Map from "@/components/Map.vue";
import axios from "axios";

export default {
  name: "App",

  components: {
    Map,
  },

  data: () => {
    return {
      formIP: "",
      ip: "",
      location: "",
      time: "",
      isp: "",
    };
  },

  async mounted() {
    const response = await axios.get("http://ipinfo.io/json");
    this.formIP = response.data.ip;
    if (this.formIP) {
      // this.getIPData();
    }
  },

  methods: {
    submit() {
      this.getIPData();
    },

    async getIPData() {
      const endpoint = new URL("https://geo.ipify.org/api/v2/country,city");
      endpoint.searchParams.set("apiKey", "at_AGgbDkYF1ZAel9gXbd6JEJdWXfZXS");
      endpoint.searchParams.set("ipAddress", this.formIP);
      const response = await axios.get(endpoint);
      console.log(response);
      this.ip = response.data.ip;
      this.location = `${response.data.location.postalCode} ${response.data.location.city}, ${response.data.location.region}, ${response.data.location.country}`;
      this.time = `UTC ${response.data.location.timezone}`;
      this.isp = response.data.isp;
      this.$refs.mapComponent.moveMap(
        response.data.location.lat,
        response.data.location.lng
      );
    },
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header {
  background-image: url("./assets/pattern-bg-desktop.png");
  background-size: cover;
  padding: 2rem;
  padding-bottom: 75px;
  color: white;
  text-align: center;

  h1 {
    margin: 0 0 2rem 0;
    font-weight: 500;
  }

  form {
    display: flex;
    width: 50%;
    margin: 0 auto 2rem auto;

    input {
      border-radius: 10px 0 0 10px;
      width: 100%;
      border: 0;
      font-size: 18px;
      padding: 1rem 1.5rem;
      cursor: pointer;

      &:focus-visible {
        outline: 0;
      }
    }

    button {
      width: 12%;
      border-radius: 0 10px 10px 0;
      border: 0;
      cursor: pointer;
      color: white;
      font-size: 20px;
      background: var(--dark-gray);
      transition: all 0.3s ease;

      &:hover {
        opacity: 0.7;
      }
    }
  }
}

.info {
  display: flex;
  max-width: 1280px;
  width: calc(100% - 4rem);
  background: white;
  text-align: left;
  border-radius: 10px;
  padding: 2rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 500;

  .section {
    padding: 0 2rem;
    width: 25%;

    &:not(:last-child) {
      border-right: 1px solid var(--gray);
    }

    h3 {
      color: var(--gray);
      margin-top: 0;
      margin-bottom: 1rem;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    span {
      color: var(--dark-gray);
      font-weight: 500;
      font-size: 22px;
    }
  }
}

@media screen and (max-width: 767px) {
  .header {
    background-image: url("./assets/pattern-bg-mobile.png");
    padding-bottom: 140px;

    form {
      width: 100%;

      button {
        width: 20%;
      }
    }
  }

  .info {
    flex-direction: column;
    flex-wrap: wrap;

    .section {
      width: 100%;
      padding: 0;
      border-right: 0 !important;
    }
  }
}
</style>
