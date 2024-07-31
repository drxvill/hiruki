<script lang="ts" setup>
</script>

<template>
    <UContainer class="p-4">
        <div class="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div>
                <ULink to="/" class="text-4xl font-bold">
                    Hiruki</ULink>
                <p class="md:w-96">This site does not store any files on our server, we
                    only linked to the media which is hosted on 3rd party services.</p>
            </div>
            <div class="hidden md:flex flex-col gap-2">
                <UTooltip text="DMCA" :popper="{ placement: 'left' }">
                    <UButton to="/dmca" icon="i-heroicons-book-open" variant="ghost" />
                </UTooltip>
                <UTooltip text="Bug Report" :popper="{ placement: 'left' }">
                    <UButton to="https://github.com/sckoorp/hiruki/issues" target="_blank" icon="i-heroicons-bug-ant"
                        variant="ghost" />
                </UTooltip>

            </div>
            <div class="flex md:hidden flex-col gap-2">
                <UButton to="/dmca" icon="i-heroicons-book-open" label="DMCA" variant="ghost" />
                <UButton to="https://github.com/sckoorp/hiruki/issues" target="_blank" icon="i-heroicons-bug-ant"
                    label="Bug Report" variant="ghost" />

            </div>
        </div>
    </UContainer>
</template>