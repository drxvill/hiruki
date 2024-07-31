<script lang="ts" setup>
const route = useRoute();
const { data } = await useFetch(`/api/upcoming?page=${route.params.page}&per=48`);
</script>

<template>
    <Head>
        <Title>Upcoming Next Season</Title>
    </Head>
    <div class="space-y-8 m-4">
        <Section :data="data" :category="3" :explorer="false" :pagination="true" />
    </div>
</template>