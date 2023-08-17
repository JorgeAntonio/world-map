import { defineStore } from "pinia";

export const useCountryStore = defineStore("country", {
  state: () => ({
    countries: [],
    filteredCountries: [],
  }),
  getters: {
    getFilteredCountries: (state) => state.filteredCountries,
  },
  actions: {
    setCountries(countries) {
      this.countries = countries;
    },
    filterCountries(search) {
      this.filteredCountries = this.countries.filter((country) => {
        return country.name.toLowerCase().includes(search.toLowerCase());
      });
    },
  },
});
