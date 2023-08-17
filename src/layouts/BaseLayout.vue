<script setup>
import Sidebar from './components/Sidebar.vue';


</script>

<template>
    <section class="w-full min-h-screen bg-background flex flex-col-reverse sm:flex-row min-w-0 overflow-hidden">
        <Sidebar />
        <main class="sm:h-full flex-1 flex flex-col min-h-0 min-w-0 p-8 md:ml-64">
            <router-view />
        </main>
    </section>
</template>
