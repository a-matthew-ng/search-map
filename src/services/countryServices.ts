export const fetchCountryData = async (countryName: string) => {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.error('Error fetching country data:', error);
    return null;
  }
};
