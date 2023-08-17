<script setup>

import { useRoute } from 'vue-router';

const route = useRoute();

const isActive = (path) => route.path === path;

const isActiveTextColor = (path) => isActive(path) ? 'text-bg-primary' : 'text-white';

</script>

<template>
    <aside class="hidden md:w-64 md:flex flex-col gap-4 bg-primary p-8 fixed h-screen">
        <div class="flex items-center justify-center bg-secondary p-4 rounded-md">
            <router-link to="/">
                <h3 class="text-2xl text-[#676767] font-bold">Logo</h3>
            </router-link>
        </div>
        <div class="flex flex-col text-primary">
            <ul>
                <router-link to="/">
                    <li :class="['rounded-md px-4 py-2', { 'bg-white': isActive('/') }]">
                        <div :class="['text-xl font-semibold', isActiveTextColor('/')]">Home</div>
                    </li>
                </router-link>
                <router-link to="/view-one">
                    <li :class="['rounded-md px-4 py-2', { 'bg-white': isActive('/view-one') }]">
                        <div :class="['text-xl font-semibold', isActiveTextColor('/view-one')]">Vista
                            1</div>
                    </li>
                </router-link>
                <router-link to="/view-two">
                    <li :class="['rounded-md px-4 py-2', { 'bg-white': isActive('/view-two') }]">
                        <div :class="['text-xl font-semibold', isActiveTextColor('/view-two')]">Vista
                            2</div>
                    </li>
                </router-link>
            </ul>
        </div>
    </aside>
</template>
