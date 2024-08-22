<template>
  <div class="search-form">
    <input
      v-model="countryName"
      type="text"
      placeholder="Enter country name"
      class="search-input"
    />
    <button @click="searchCountry" class="search-button">Buscar</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'countrySearchForm',
  emits: ['search'],
  setup(_, { emit }) {
    const countryName = ref('');

    const searchCountry = () => {
      emit('search', countryName.value);
    };

    return {
      countryName,
      searchCountry,
    };
  },
});
</script>

<style scoped>
.search-form {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 20px;
}

.search-input {
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #007bff;
  font-size: 16px;
  outline: none;
}

.search-input:focus {
  border-color: #0056b3;
}

.search-button {
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

.search-button:hover {
  background-color: #0056b3;
}
</style>
