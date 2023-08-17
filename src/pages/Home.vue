<script setup>
import { ref, watchEffect, computed } from 'vue'
import CountryCard from '../components/CountryCard.vue'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'


const { result, loading, error } = useQuery(gql`
    query {
        countries {
            name
            capital
            continent {
                name
            }
        }
    }
`)

const countries = ref([])

watchEffect(() => {
    if (result.value) {
        countries.value = result.value.countries
    }
})

const search = ref('')

const filteredCountries = ref([])

watchEffect(() => {
    filteredCountries.value = countries.value.filter(country => {
        return country.name.toLowerCase().includes(search.value.toLowerCase())
    })
})

</script>

<template>
    <div class="h-full">
        <header class="pb-14">
            <div
                class="max-w-2xl flex justify-between items-center py-2 px-4 bg-white rounded-full shadow-2xl border-b-2 border-primary mx-auto">
                <div class="flex flex-col px-2 w-2/5">
                    <span class="text-lg text-primary">País</span>
                    <input v-model="search" type="text" placeholder="Escriba el país que desea ver"
                        class="outline-none focus:border-b-2 focus:border-tertiary" />
                </div>
                <div class="flex bg-tertiary text-white rounded-full px-2 py-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z" />
                    </svg>
                    <button>Buscar</button>
                </div>
            </div>
        </header>
        <main>
            <div v-if="loading">
                <h1 class="text-primary text-lg">Cargando...</h1>
            </div>

            <section v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <CountryCard v-for="(country, index) in filteredCountries" :key="index" :country="country" />
            </section>
            <div v-if="error">
                <h1 class="text-primary text-lg">Error: {{ error }}</h1>
            </div>
            <section>
                <router-view></router-view>
            </section>
        </main>
    </div>
</template>
