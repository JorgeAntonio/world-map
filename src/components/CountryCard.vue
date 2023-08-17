<script setup>
import { defineProps, watchEffect, ref } from 'vue'
import axios from 'axios';

const { country } = defineProps(['country'])
const flagImage = ref('')
const capitalImage = ref('')

const getCapitalImage = async () => {
    try {
        const { data } = await axios.get(`https://pixabay.com/api/?key=38896090-58891f1108855ebc89742d9a6&q=${country.capital}&image_type=photo&pretty=true&page=1&per_page=3`)
        capitalImage.value = data.hits[0].webformatURL
    } catch (error) {
        // console.log('Error fetching capital image', error)
    }
}

const getFlagImage = async () => {
    try {
        const { data } = await axios.get(`https://countriesnow.space/api/v0.1/countries/flag/images`)
        flagImage.value = data.data.find(flag => flag.name === country.name).flag
    } catch (error) {
        // console.log('Error fetching flag', error)
    }
}

watchEffect(() => {
    if (country) {
        getCapitalImage()
        getFlagImage()
    }
});

</script>

<template>
    <router-link to="country">
        <div class="rounded-3xl bg-white shadow-2xl hover:cursor-pointer">
            <header>
                <img v-if="capitalImage" :src="capitalImage" :alt="country.capital"
                    class="rounded-t-3xl h-36 object-cover w-full">
                <img v-else
                    src="https://pixabay.com/get/gf19b202347760c0dbe1ad310a611a117dc641caf4a527e908165d6426c31ccb4c88582683969c505533939ed230c5bb350240b464e7d820c547d7179113a73e0_640.jpg"
                    :alt="country.capital" class="rounded-t-3xl h-36 object-cover w-full">
            </header>
            <main class="p-4">
                <div class="flex justify-start items-center gap-4">
                    <img v-if="flagImage" :src="flagImage" :alt="country.name" class="h-full w-14">
                    <img v-else
                        src="https://pixabay.com/get/gf19b202347760c0dbe1ad310a611a117dc641caf4a527e908165d6426c31ccb4c88582683969c505533939ed230c5bb350240b464e7d820c547d7179113a73e0_640.jpg"
                        :alt="country.name" class="h-full w-14">
                    <div>
                        <h3 class="text-2xl font-semibold text-tertiary line-clamp-1">{{ country.name }}</h3>
                        <p class="text-lg text-primary text-semibold">{{ country.continent.name }}</p>
                    </div>
                </div>
            </main>
        </div>
    </router-link>
</template>
