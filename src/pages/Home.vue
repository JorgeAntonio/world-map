<script setup>
import ItemCard from '../components/ItemCard.vue'
</script>

<template>
    <div>
        <header class="pb-8">
            <div
                class="max-w-2xl flex justify-between items-center py-2 px-4 bg-white rounded-full shadow-2xl border-b-2 border-primary mx-auto">
                <div class="flex flex-col px-2">
                    <input type="text" placeholder="País" class="outline-none" />
                    <span class="text-sm text-primary opacity-50">Escriba el país que desea ver</span>
                </div>
                <div class="flex bg-tertiary text-white rounded-full px-2 py-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z" />
                    </svg>
                    <button class="px-2">Buscar</button>
                </div>
            </div>
        </header>
        <main class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
        </main>
    </div>
</template>
