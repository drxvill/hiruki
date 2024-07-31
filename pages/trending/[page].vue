<script lang="ts" setup>
const route = useRoute();
const { data } = await useFetch(`/api/trending?page=${route.params.page}&per=48`);
</script>

<template>
    <Head>
        <Title>Trending Now</Title>
    </Head>
    <div class="space-y-8 m-4">
        <Section :data="data" :category="1" :explorer="false" :pagination="true" />
    </div>
</template>