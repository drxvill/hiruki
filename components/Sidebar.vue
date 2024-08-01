<script lang="ts" setup>
</script>

<template>
    <div class="fixed hidden md:flex">
        <div class="flex flex-col w-16 h-screen font-outfit select-none p-2">
            <div class="flex flex-col gap-4">
                <UTooltip text="Home" :popper="{ placement: 'right' }">
                    <UButton to="/" icon="i-heroicons-home-solid" color="gray" variant="ghost" size="xl" block />
                </UTooltip>
                <UTooltip text="Explore" :popper="{ placement: 'right' }">
                    <UButton to="/explore" icon="i-heroicons-fire-solid" color="gray" variant="ghost" size="xl" block />
                </UTooltip>
                <UTooltip text="Bookmarks" :popper="{ placement: 'right' }">
                    <UButton to="/bookmarks" icon="i-heroicons-bookmark-solid" color="gray" variant="ghost" size="xl"
                        block />
                </UTooltip>
                <UTooltip text="Random" :popper="{ placement: 'right' }">
                    <UButton to="/random" icon="i-heroicons-bolt-solid" color="gray" variant="ghost" size="xl" block />
                </UTooltip>
            </div>
            <div class="flex flex-col gap-4 mt-auto">
                <UTooltip text="Settings" :popper="{ placement: 'right' }">
                    <UButton to="/settings" icon="i-heroicons-cog-6-tooth-16-solid" color="gray" variant="ghost"
                        size="xl" block />
                </UTooltip>
            </div>
        </div>
    </div>
</template>