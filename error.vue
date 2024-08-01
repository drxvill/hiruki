<script lang="ts" setup>
const error = useError();
</script>

<template>
    <Head>
        <Title>Error {{ error.statusCode }}</Title>
    </Head>
    <div class="flex flex-col justify-center items-center font-outfit gap-2 h-screen">
        <UButton icon="i-heroicons-exclamation-triangle-16-solid" :label="String(error.statusCode)" color="red"
            variant="soft" />
        <p class="text-4xl font-bold">Dang</p>
        <p class="text-lg font-normal text-center">It looks like something broke...</p>
        <UButton icon="i-heroicons-home-solid" label="Go Home" variant="solid" size="lg"
            @click="clearError({ redirect: '/' })" />
    </div>
</template>