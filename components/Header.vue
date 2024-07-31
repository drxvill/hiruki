<script lang="ts" setup>
import type { FormSubmitEvent } from "#ui/types";

const route = useRoute();
const router = useRouter();

const path = ref("/");
const modal = ref(false);
const state = reactive({ query: undefined });
const items = [
    [{ to: "/explore", label: "Explore", icon: "i-heroicons-fire" }],
    [{ to: "/bookmarks", label: "Bookmarks", icon: "i-heroicons-bookmark" }],
    [{ to: "/random", label: "Random", icon: "i-heroicons-bolt" }]
];

function onSearchSubmit({ data }: FormSubmitEvent<any>) {
    if (state.query !== undefined) {
        modal.value = false
        navigateTo(`/search/${data.query}`);
        state.query = undefined
    }
}

onMounted(() => {
    watch(() => route.path, () => {
        path.value = route.path
    });
});
</script>

<template>
    <div :class="`flex ${path !== '/' ? 'justify-between' : 'justify-end'} items-center py-2 px-4`">
        <div class="flex items-center gap-4" v-if="path !== '/'">
            <UTooltip text="Go Back" :popper="{ placement: 'bottom' }">
                <UButton icon="i-heroicons-arrow-left-20-solid" color="gray" variant="ghost" size="lg"
                    @click="router.back()" />
            </UTooltip>
            <UTooltip text="Go Home" :popper="{ placement: 'bottom' }">
                <UButton to="/" icon="i-heroicons-home-solid" color="gray" variant="ghost" size="lg" />
            </UTooltip>
        </div>
        <div class="flex items-center gap-4">
            <div class="hidden md:flex items-center gap-2">
                <UTooltip text="Search" :popper="{ placement: 'bottom' }">
                    <UButton icon="i-heroicons-magnifying-glass-16-solid" variant="solid" size="lg"
                        @click="modal = true" />
                </UTooltip>
                <UTooltip text="Theme" :popper="{ placement: 'bottom' }">
                    <Mode />
                </UTooltip>
            </div>
            <div class="flex md:hidden items-center gap-4">
                <UButton icon="i-heroicons-magnifying-glass-16-solid" variant="solid" size="lg" @click="modal = true" />
                <Mode />
                <UDropdown :items="items">
                    <UButton icon="i-heroicons-bars-3-16-solid" variant="solid" size="lg" />
                </UDropdown>
            </div>
        </div>
    </div>

    <UModal v-model="modal">
        <UForm :state="state" class="flex items-center gap-4 p-4" @submit="onSearchSubmit">
            <UButtonGroup orientation="horizontal" class="w-full" size="xl">
                <UFormGroup name="query" class="w-full" required>
                    <UInput v-model="state.query" placeholder="Search..." variant="none"
                        icon="i-heroicons-magnifying-glass-16-solid" />
                </UFormGroup>
                <UButton type="submit" icon="i-heroicons-magnifying-glass-16-solid" variant="solid" />
            </UButtonGroup>
        </UForm>
    </UModal>
</template>