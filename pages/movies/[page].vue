<script lang="ts" setup>
const route = useRoute();
const { data } = await useFetch(`/api/movies?page=${route.params.page}&per=48`);
</script>

<template>
    <Head>
        <Title>Most Popular Movies</Title>
    </Head>
    <div class="space-y-8 m-4">
        <Cards :data="data" :category="5" :explorer="false" :pagination="true" />
    </div>
</template>