<script setup>
import Sidebar from './components/Sidebar.vue';


</script>

<template>
    <section class="h-screen w-screen bg-background flex flex-col-reverse sm:flex-row min-h-0 min-w-0 overflow-hidden">
        <Sidebar />
        <main class="sm:h-full flex-1 flex flex-col min-h-0 min-w-0 p-8">
            <router-view />
        </main>
    </section>
</template>
