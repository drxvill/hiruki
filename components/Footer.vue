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
                <UButton to="/dmca" icon="i-heroicons-book-open" label="DMCA" color="white" variant="ghost" />
                <UButton to="https://github.com/drxvill/hiruki/issues" target="_blank" icon="i-heroicons-bug-ant"
                    label="Bug Report" color="white" variant="ghost" />

            </div>
            <div class="grid md:hidden grid-cols-2 gap-2">
                <UButton to="/dmca" icon="i-heroicons-book-open" label="DMCA" color="white" variant="ghost" />
                <UButton to="https://github.com/drxvill/hiruki/issues" target="_blank" icon="i-heroicons-bug-ant"
                    label="Bug Report" color="white" variant="ghost" />
            </div>
        </div>
    </UContainer>
</template>