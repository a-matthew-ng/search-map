<template>
  <div class="app">
    <SearchForm @search="handleSearch" />
    <CountryResults :countryData="countryData" />
  </div>
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
  text-align: center;
  background-color: #f0f0f0;
  padding: 20px;
}
</style>
