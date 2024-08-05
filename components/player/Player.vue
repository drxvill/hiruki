<script lang="ts" setup>
import "vidstack/bundle";
const { src } = defineProps(["src"]);
</script>

<template>
    <ClientOnly>
        <media-player :src="src" class="w-full md:h-80 lg:h-[550px]">
            <media-provider />
            <media-video-layout />
        </media-player>
    </ClientOnly>
</template>