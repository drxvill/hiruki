<script lang="ts" setup>
</script>

<template>
    <div class="fixed hidden md:flex">
        <div class="flex flex-col justify-center gap-4 w-16 h-screen font-outfit select-none p-2">
            <UTooltip text="Home" :popper="{ placement: 'right' }">
                <UButton to="/" icon="i-heroicons-home-solid" color="white" variant="ghost" size="xl" block />
            </UTooltip>
            <UTooltip text="Explore" :popper="{ placement: 'right' }">
                <UButton to="/explore" icon="i-heroicons-fire-solid" color="white" variant="ghost" size="xl" block />
            </UTooltip>
            <UTooltip text="Bookmarks" :popper="{ placement: 'right' }">
                <UButton to="/bookmarks" icon="i-heroicons-bookmark-solid" color="white" variant="ghost" size="xl"
                    block />
            </UTooltip>
            <UTooltip text="Random" :popper="{ placement: 'right' }">
                <UButton to="/random" icon="i-heroicons-bolt-solid" color="white" variant="ghost" size="xl" block />
            </UTooltip>
        </div>
    </div>
</template>