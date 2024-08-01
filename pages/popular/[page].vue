<script lang="ts" setup>
const route = useRoute();
const { data } = await useFetch(`/api/popular?page=${route.params.page}&per=48`);
</script>

<template>
    <Head>
        <Title>All Time Popular</Title>
    </Head>
    <div class="space-y-8 m-4">
        <Cards :data="data" :category="2" :explorer="false" :pagination="true" />
    </div>
</template>