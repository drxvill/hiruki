<script setup lang="ts">
const colorMode = useColorMode();
const isDark = computed({
    get() {
        return colorMode.value === "dark"
    },
    set() {
        colorMode.preference = colorMode.value === "dark" ? "light" : "dark"
    }
})
</script>

<template>
    <ClientOnly>
        <UButton :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" variant="solid"
            aria-label="Theme" size="lg" @click="isDark = !isDark" />
        <template #fallback>
            <div class="w-10 h-10" />
        </template>
    </ClientOnly>
</template>
