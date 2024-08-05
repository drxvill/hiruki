<script lang="ts" setup>
import { init } from "@waline/client";
import "@waline/client/meta";
import "@waline/client/waline.css"

const config = useRuntimeConfig() as any

onMounted(() => {
    init({
        el: "#wl-container",
        serverURL: config.public.WALINE,
        lang: "en"
    });
});
</script>

<template>
    <div id="wl-container" />
</template>

<style>
[data-waline] {
    @apply m-2
}

[data-waline] p {
    @apply dark:text-white text-black
}

[data-waline] pre {
    @apply dark:bg-neutral-900 bg-neutral-100 dark:border-neutral-800 border-neutral-200 border
}

[data-waline] ol, ul {
    @apply list-disc
}

.wl-empty {
    @apply dark:text-white/85 text-black/85
}

.wl-comment {
    @apply relative
}

.wl-comment .wl-panel {
    @apply dark:bg-neutral-900 dark:border-neutral-800
}

.wl-comment .wl-panel .wl-header, .wl-comment .wl-panel .wl-header-item {
    @apply dark:border-neutral-800 border-solid
}

.wl-comment .wl-panel .wl-header .wl-header-item label {
    @apply dark:text-white/85 text-black/85 text-sm
}

.wl-comment .wl-panel .wl-header .wl-header-item input {
    @apply bg-transparent dark:text-white text-black text-sm
}

.wl-comment .wl-panel #wl-edit {
    @apply dark:bg-neutral-900 bg-white dark:text-white text-black
}

.wl-comment .wl-panel .wl-preview hr {
    @apply dark:border-white/85 border-black/85 border-solid
}

.wl-comment .wl-panel .wl-footer .wl-actions button.wl-action, label.wl-action {
    @apply dark:text-white
}

.wl-cards .wl-card-item .wl-card {
    @apply border-none
}

.wl-cards .wl-card-item .wl-card .wl-head .wl-nick {
    @apply dark:text-white/85
}

.wl-cards .wl-card-item .wl-card .wl-meta span {
    @apply dark:bg-neutral-800
}

.wl-cards .wl-card-item .wl-card .wl-head .wl-comment-actions {
    @apply space-x-2
}

.wl-cards .wl-card-item .wl-card .wl-head .wl-comment-actions button {
    @apply dark:text-white/85 dark:hover:text-primary
}

.wl-cards .wl-card-item .wl-card .wl-admin-actions .wl-btn {
    @apply dark:text-white text-black disabled:dark:text-black/85 hover:border-primary disabled:border-transparent hover:text-primary
}
</style>