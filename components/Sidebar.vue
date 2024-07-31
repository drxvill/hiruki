<script lang="ts" setup>
</script>

<template>
    <UCard class="fixed hidden md:flex flex-col justify-center items-center w-16 h-screen font-outfit select-none">
        <div class="space-y-4">
            <UTooltip text="Home" :popper="{ placement: 'right' }">
                <UButton to="/" icon="i-heroicons-home-solid" color="gray" variant="ghost" size="xl" block />
            </UTooltip>
            <UTooltip text="Explore" :popper="{ placement: 'right' }">
                <UButton to="/explore" icon="i-heroicons-fire" color="gray" variant="ghost" size="xl" block />
            </UTooltip>
            <UTooltip text="Bookmarks" :popper="{ placement: 'right' }">
                <UButton to="/bookmarks" icon="i-heroicons-bookmark" color="gray" variant="ghost" size="xl" block />
            </UTooltip>
            <UTooltip text="Random" :popper="{ placement: 'right' }">
                <UButton to="/random" icon="i-heroicons-bolt" color="gray" variant="ghost" size="xl" block />
            </UTooltip>
        </div>
    </UCard>
</template>