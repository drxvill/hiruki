<script lang="ts" setup>
const { data } = await useFetch("/api/random");
navigateTo(`/info/${data.value.id}`);
</script>

<template>
    <div class="flex justify-center items-center h-96">
        <UButton label="Loading" color="gray" variant="ghost" size="xl" loading />
    </div>
</template>