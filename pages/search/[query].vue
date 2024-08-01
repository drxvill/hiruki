<script lang="ts" setup>
const route = useRoute();
const { data } = await useFetch(`/api/search?q=${route.params.query}`);
</script>

<template>
    <Head>
        <Title>Search Results</Title>
    </Head>
    <div class="space-y-8 m-4">
        <Cards :data="data" :category="8" :explorer="false" :pagination="true" />
    </div>
</template>