<script lang="ts" setup>
import { useStorage } from "@vueuse/core";

const loading = ref(true);
const bookmarks = useStorage("bookmarks", { data: [] });

onMounted(() => {
    loading.value = false
})
</script>

<template>

    <Head>
        <Title>Bookmarks</Title>
    </Head>
    <div class="space-y-8 m-4" v-if="!loading">
        <Cards :data="bookmarks" :category="7" :explorer="false" :pagination="false" />
    </div>
    <div class="flex justify-center items-center h-96" v-else>
        <UButton label="Loading" color="gray" variant="ghost" size="xl" loading />
    </div>
</template>