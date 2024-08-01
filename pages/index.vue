<script lang="ts" setup>
const { data } = await useAsyncData("categories", async () => {
    const [spotlights, trending, popular, upcoming, top] = await Promise.all([
        await $fetch("/api/spotlights"),
        await $fetch("/api/trending?page=1&per=6"),
        await $fetch("/api/popular?page=1&per=6"),
        await $fetch("/api/upcoming?page=1&per=6"),
        await $fetch("/api/top")
    ]);
    return { spotlights, trending, popular, upcoming, top }
});
</script>

<template>

    <Head>
        <Title>Free Anime Streaming</Title>
    </Head>
    <div class="space-y-4 m-4">
        <Cards :data="data?.trending" :category="1" :explorer="false" :pagination="false" />
        <Cards :data="data?.popular" :category="2" :explorer="false" :pagination="false" />
        <Cards :data="data?.upcoming" :category="3" :explorer="false" :pagination="false" />
        <Cards :data="data?.top" :category="6" :explorer="false" :pagination="false" />
    </div>
</template>