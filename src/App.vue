<template>
  <section class="app">
    <div class="app-container">
      <h1 class="title">Aprende más sobre los países</h1>
      <SearchForm @search="handleSearch" />
      <CountryResults :countryData="countryData" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import SearchForm from '@/components/countrySearchForm.vue';
import CountryResults from '@/components/countryResults.vue';
import { fetchCountryData } from '@/services/countryServices';

export default defineComponent({
  name: 'App',
  components: {
    SearchForm,
    CountryResults,
  },
  setup() {
    const countryData = ref<any>(null);

    const handleSearch = async (countryName: string) => {
      countryData.value = await fetchCountryData(countryName);
    };

    return {
      countryData,
      handleSearch,
    };
  },
});
</script>

<style scoped>
.app {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.app-container {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 40%;
  max-width: 600px;
  box-sizing: border-box;
  min-height: 80vh;
  text-align: center; /* Center text and content */
}

@media (min-width: 408px) {
  .app-container {
    width: 90%;
  }
}

.title {
  font-size: 24px;
  color: #007bff;
  margin-bottom: 20px;
  font-weight: bold;
}
</style>
