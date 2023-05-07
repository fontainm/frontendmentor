<template>
  <div id="mapContainer"></div>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default {
  data() {
    return {
      map: null,
    };
  },

  mounted() {
    this.map = L.map("mapContainer", {
      attributionControl: false,
      zoomControl: false,
    }).setView([50, 8], 4);
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {}).addTo(this.map);
    var customPane = this.map.createPane("customPane");
    customPane.style.zIndex = 399; // put just behind the standard overlay pane which is at 400
  },

  methods: {
    moveMap(lat, lng) {
      let icon = L.icon({
        iconUrl: require("@/assets/icon-location.svg"),
        iconAnchor: [23, 56],
      });

      this.map.panTo({ lat, lng });
      L.marker({ lat, lng }, { icon }).addTo(this.map);
    },
  },
};
</script>

<style scoped>
#mapContainer {
  width: 100%;
  height: 100%;
}
</style>