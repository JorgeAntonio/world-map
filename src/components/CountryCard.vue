<script setup>
import { defineProps } from 'vue'

const { country } = defineProps(['country'])
</script>

<template>
    <div class="rounded-3xl bg-white shadow-2xl">
        <header>
            <img src="https://images.unsplash.com/photo-1540827341250-3dba07798cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                alt="" class="rounded-t-3xl h-36 object-cover w-full">
        </header>
        <main class="p-4">
            <div class="flex justify-start items-center gap-4">
                <img src="https://images.unsplash.com/photo-1540827341250-3dba07798cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                    alt="" class="h-12">
                <div>
                    <h3 class="text-2xl font-semibold text-tertiary">{{ country.name }}</h3>
                    <p class="text-sm text-primary text-semibold">{{ country.continent.name }}</p>
                </div>
            </div>
        </main>
    </div>
</template>
