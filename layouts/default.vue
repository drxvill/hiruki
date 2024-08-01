<script lang="ts" setup>
import { useStorage } from "@vueuse/core";
useStorage("bookmarks", { data: [] });
</script>

<template>
    <Head>
        <Meta name="keywords" content="anime, manga, free, streaming, hiruki" />
    </Head>
    <NuxtLoadingIndicator color="#3B82F6" />
    <Sidebar />
    <div class="font-outfit select-none md:ml-16">
        <Header />
        <slot />
        <Footer />
    </div>
    <UNotifications />
</template>

<style>
::-webkit-scrollbar { @apply w-0 }
</style>