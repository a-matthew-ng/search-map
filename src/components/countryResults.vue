<template>
  <div class="country-details">
    <div v-if="countryData">
      <h2>{{ countryData.name.common }} ({{ countryData.name.official }})</h2>

      <div class="images-container">
        <img
          :src="countryData.flags.png"
          alt="Flag of {{ countryData.name.common }}"
          class="country-flag"
        />
        <img
          :src="countryData.coatOfArms.png"
          alt="Coat of Arms of {{ countryData.name.common }}"
          class="country-coat-of-arms"
        />
      </div>

      <p>
        <strong>Capital:</strong>
         {{ countryData.capital[0] }}
        </p>
      <p>
        <strong>Region:</strong>
         {{ countryData.region }}
      </p>
      <p>
        <strong>Subregion:</strong>
         {{ countryData.subregion }}
      </p>
      <p>
        <strong>Continent:</strong>
         {{ countryData.continents[0] }}
      </p>
      <p>
        <strong>Area:</strong>
         {{ countryData.area }} km²
      </p>
      <p>
        <strong>Borders:</strong> 
        {{ countryData.borders.join(", ") }}</p>
      <p>
        <strong>Time Zone:</strong>
         {{ countryData.timezones[0] }}
      </p>

      <div class="map-buttons">
        <button @click="mapType = 'googleMaps'">Google Maps</button>
        <button @click="mapType = 'openStreetMaps'">OpenStreetMap</button>
      </div>
      <div class="map-link">
        <p>
          Para ver el mapa en una nueva ventana, haz clic en el siguiente
          enlace:
        </p>
        <a
          :href="countryData.maps[mapType]"
          target="_blank"
          rel="noopener noreferrer"
          class="map-link-button"
        >
          Ver Mapa en
          {{ mapType === "googleMaps" ? "Google Maps" : "OpenStreetMap" }}
        </a>
      </div>

      <div class="map-container">
        <iframe
          v-if="mapType === 'googleMaps'"
          :src="countryData.maps.googleMaps"
          width="450"
          height="450"
          style="border: 0"
          loading="lazy"
          @error="mapLoadError = true"
        ></iframe>
        <iframe
          v-if="mapType === 'openStreetMaps'"
          :src="countryData.maps.openStreetMaps"
          width="450"
          height="450"
          style="border: 0"
          loading="lazy"
          @error="mapLoadError = true"
        ></iframe>
        <div v-if="mapLoadError" class="error-message">
          <p>Lo siento, no se pudo cargar el mapa en esta oportunidad.</p>
          <img
            :src="countryData.flags.png"
            alt="Flag of {{ countryData.name.common }}"
            class="country-flag"
          />
        </div>
      </div>
    </div>

    <p v-else>Busca un país para ver los detalles.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "CountryResults",
  props: {
    countryData: {
      type: Object,
      required: false,
      default: null,
    },
  },
  setup() {
    const mapLoadError = ref(false);
    const mapType = ref<"googleMaps" | "openStreetMaps">("googleMaps");

    return {
      mapLoadError,
      mapType,
    };
  },
});
</script>

<style scoped>
.country-details {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  border: 1px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: auto;
  text-align: center;
}

.images-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

.country-flag,
.country-coat-of-arms {
  max-width: 100px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.map-buttons {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.map-buttons button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.map-buttons button:hover {
  background-color: #0056b3;
}

.map-container {
  margin-top: 20px;
}

.error-message {
  color: red;
  font-weight: bold;
}

.map-link {
  margin-top: 20px;
}

.map-link-button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.3s;
}

.map-link-button:hover {
  background-color: #0056b3;
}
</style>
