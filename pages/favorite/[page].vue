<script lang="ts" setup>
const route = useRoute();
const { data } = await useFetch(`/api/favorite?page=${route.params.page}&per=48`);
</script>

<template>
    <Head>
        <Title>Most Favorite</Title>
    </Head>
    <div class="space-y-8 m-4">
        <Section :data="data" :category="4" :explorer="false" :pagination="true" />
    </div>
</template>