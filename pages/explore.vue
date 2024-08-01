<script lang="ts" setup>
const { data } = await useAsyncData("explorer", async () => {
    const [trending, popular, upcoming, favorite, movies] = await Promise.all([
        await $fetch("/api/trending?page=1&per=12"),
        await $fetch("/api/popular?page=1&per=12"),
        await $fetch("/api/upcoming?page=1&per=12"),
        await $fetch("/api/favorite?page=1&per=12"),
        await $fetch("/api/movies?page=1&per=12")
    ]);
    return { trending, popular, upcoming, favorite, movies }
});
</script>

<template>
    <Head>
        <Title>Exlore</Title>
    </Head>
    <div class="space-y-8 m-4">
        <Cards :data="data?.trending" :category="1" :explorer="true" :pagination="false" />
        <Cards :data="data?.popular" :category="2" :explorer="true" :pagination="false" />
        <Cards :data="data?.upcoming" :category="3" :explorer="true" :pagination="false" />
        <Cards :data="data?.favorite" :category="4" :explorer="true" :pagination="false" />
        <Cards :data="data?.movies" :category="5" :explorer="true" :pagination="false" />
    </div>
</template>