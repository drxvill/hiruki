<script lang="ts" setup>
import Giscus from "@giscus/vue";
import { useOnline } from "@vueuse/core";

const colorMode = useColorMode();
const config = useAppConfig() as any
const online = useOnline().value

const isDark = computed({
    get() {
        return colorMode.value === "dark"
    },
    set() {
        colorMode.preference = colorMode.value === "dark" ? "light" : "dark"
    }
});
</script>

<template>
    <div v-if="online" class="my-8 mx-4">
        <Giscus :repo="config.giscus.repo" :repo-id="config.giscus.repoId" :category="config.giscus.category"
            :category-id="config.giscus.categoryId" :mapping="config.giscus.mapping" strict="0"
            :reactions-enabled="config.giscus.reactions" :emit-metadata="config.giscus.emitMetadata"
            :inut-position="config.giscus.inputPosition" :theme="isDark ? 'noborder_dark' : 'noborder_light'"
            :lang="config.giscus.lang" :crossorigin="config.giscus.crossorigin" :loading="config.giscus.loading" />
    </div>
</template>

<style scoped></style>