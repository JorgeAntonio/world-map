<script setup>
import { defineProps, ref } from 'vue'


const props = defineProps(
    {
        name: String,
        imageUrl: String,
        continent: String,
        capital: String,
        language: String,
        population: String,
        currency: String,
        region: String
    }
)

const flagImage = ref('')


const close = () => {
    router.back({ name: 'Home' })
}

</script>

<template>
    <div class="max-w-sm p-8 bg-white">
        <div class="flex justify-end">
            <button @click="close" class="text-lg text-primary font-bold uppercase">x</button>
        </div>
        <header>
            <img :src="capitalImage" :alt="name" class="rounded-lg h-48 object-cover w-full">
        </header>
        <main class="py-4">
            <div class="flex justify-start items-center gap-4">
                <img :src="flagImage" :alt="country.name" class="h-12">
                <div>
                    <h3 class="text-2xl font-semibold text-tertiary">{{ country.name }}</h3>
                    <p class="text-lg text-primary etext-semibold">{{ country.continent.name }}</p>
                </div>
            </div>
            <div class="flex flex-col gap-y-2 pt-2">
                <p class="text-tertiary font-semibold text-lg">Capital: <span class="text-primary pl-3">London</span></p>
                <p class="text-tertiary font-semibold text-lg">Language: <span class="text-primary pl-3">London</span></p>
                <p class="text-tertiary font-semibold text-lg">Population: <span class="text-primary pl-3">London</span></p>
                <p class="text-tertiary font-semibold text-lg">Currency: <span class="text-primary pl-3">London</span></p>
                <p class="text-tertiary font-semibold text-lg">Region
                <ul class="text-primary">
                    <li>Africa</li>
                    <li>America</li>
                    <li>Asia</li>
                    <li>Europe</li>
                    <li>Oceania</li>
                </ul>
                </p>
            </div>

        </main>
    </div>
</template>
