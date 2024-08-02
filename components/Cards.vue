<script lang="ts" setup>
import { useStorage } from "@vueuse/core";

const toast = useToast();
const bookmarks = useStorage("bookmarks", { data: [] });
const { data, category, explorer, pagination } = defineProps([
    "data",
    "category",
    "explorer",
    "pagination"
]);

function onClearAll() {
    toast.add({ title: "Successfully Cleared!" });
    bookmarks.value = { data: [] }
}
</script>

<template>
    <div class="space-y-4">
        <div class="flex justify-between items-center">
            <p class="text-xl font-bold uppercase">{{ category === 1 ? "Trending Now" : category === 2
                ? "All Time Popular" : category === 3 ? "Upcoming Next Season" : category === 4 ? "Most Favorite" :
                    category === 5 ? "Most Popular Movies" : category === 6 ? "Top 10 Anime" : category === 7 ?
                        "My Bookmarks" : category === 8 ? "Search Results" : "Unknown" }}</p>
            <UButton icon="i-heroicons-trash" label="Clear All" variant="ghost" @click="onClearAll"
                v-if="category === 7 && data.data.length > 0" />
            <UButton :to="category === 1 ? '/trending/1' : category === 2 ? '/popular/1' : category === 3
                ? '/upcoming/1' : category === 4 ? '/favorite/1' : category === 5 ? '/movies/1' : '/'"
                icon="i-heroicons-plus-circle-20-solid" label="View More" variant="ghost" v-if="explorer" />
        </div>
        <div class="flex justify-center items-center h-80" v-if="data.data.length < 1">
            <p class="text-xl font-semibold" v-if="category === 7">No Bookmarks</p>
            <p class="text-xl font-semibold" v-else-if="category === 8">No Result</p>
            <p class="text-xl font-semibold" v-else>No Data</p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2" v-else-if="category !== 6">
            <ULink v-for="anime in data.data" :to="`/info/${anime.id}`" class="flex flex-col rounded-md gap-2">
                <div class="w-full h-full rounded-md overflow-hidden">
                    <NuxtImg :src="anime.cover" :alt="anime.title" format="webp" quality="80" sizes="100vw" placeholder
                        width="100" height="100"
                        class="w-full h-full rounded-md object-cover transition-transform hover:scale-110" />
                </div>
                <p class="font-medium truncate">{{ anime.title }}</p>
                <div class="flex items-center gap-2">
                    <UButton icon="i-heroicons-calendar-16-solid" :label="anime.year ? String(anime.year) : 'N/A'"
                        color="white" size="2xs" />
                    <UButton icon="i-heroicons-star-16-solid" :label="anime.score ? anime.score : 'N/A'" color="white"
                        size="2xs" v-if="category !== 3" />
                </div>
            </ULink>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4" v-if="category === 6">
            <UButton :to="`/info/${anime.id}`" class="flex items-center rounded-xl gap-4 py-2 px-4" color="white"
                v-for="(anime, index) in data.data">
                <p class="w-12 text-2xl font-bold">#{{ index + 1 }}</p>
                <div class="flex items-center w-full gap-4">
                    <div class="w-16 h-24">
                        <NuxtImg :src="anime.cover" :alt="anime.title" format="webp" quality="80" sizes="100vw"
                            placeholder width="100" height="100" class="w-full h-full rounded-md object-cover" />
                    </div>
                    <div class="flex flex-1 flex-col gap-2">
                        <p class="font-medium line-clamp-2">{{ anime.title }}</p>
                        <div class="flex flex-wrap items-center gap-2">
                            <UButton icon="i-heroicons-calendar-days-16-solid" class="w-fit"
                                :label="anime.season ? anime.season : 'N/A'" color="white" size="2xs" />
                            <UButton icon="i-heroicons-star-16-solid" class="w-fit"
                                :label="anime.score ? anime.score : 'N/A'" color="white" size="2xs" />
                        </div>
                    </div>
                </div>
            </UButton>
        </div>
    </div>
    <div class="flex justify-between items-center" v-if="data.pagination" v-show="pagination">
        <UButton :to="category === 1 ? `/trending/${data.pagination.currentPage - 1}`
            : category === 2 ? `/popular/${data.pagination.currentPage - 1}`
                : category === 3 ? `/upcoming/${data.pagination.currentPage - 1}`
                    : category === 4 ? `/favorite/${data.pagination.currentPage - 1}`
                        : category === 5 ? `/movies/${data.pagination.currentPage - 1}` : '/'"
            icon="i-heroicons-arrow-small-left-20-solid" label="Previous" variant="soft"
            :disabled="data.pagination.currentPage <= 1" />
        <p class="text-base font-medium">Page {{ data.pagination.currentPage }}</p>
        <UButton :to="category === 1 ? `/trending/${data.pagination.currentPage + 1}`
            : category === 2 ? `/popular/${data.pagination.currentPage + 1}`
                : category === 3 ? `/upcoming/${data.pagination.currentPage + 1}`
                    : category === 4 ? `/favorite/${data.pagination.currentPage + 1}`
                        : category === 5 ? `/movies/${data.pagination.currentPage + 1}` : '/'"
            icon="i-heroicons-arrow-small-right-20-solid" label="Next" variant="soft" trailing
            :disabled="!data.pagination.hasNextPage" />
    </div>
</template>