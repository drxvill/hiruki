<script lang="ts" setup>
import { useStorage } from "@vueuse/core";

const route = useRoute();
const toast = useToast();
const bookmarks = useStorage("bookmarks", { data: [] });

const { data } = await useAsyncData("info", async () => {
    const [info, recommendations, episodes] = await Promise.all([
        await $fetch(`/api/info?id=${route.params.id}`),
        await $fetch(`/api/recommendations?id=${route.params.id}`),
        await $fetch(`/api/episodes?id=${route.params.id}`)
    ]);
    return { info, recommendations, episodes }
});

function isBookmarked() {
    return bookmarks.value.data.find((item: any) => item.id == route.params.id) !== undefined
}

function onAddBookmark() {
    const list: any = bookmarks.value
    toast.add({ title: "Successfully Added!" });
    list.data.push({
        id: data.value?.info.id,
        title: data.value?.info.title,
        cover: data.value?.info.cover,
        format: data.value?.info.format,
        status: data.value?.info.status,
        season: data.value?.info.season,
        year: data.value?.info.year,
        score: data.value?.info.score,
        episodes: data.value?.info.episodes
    });
}

function onRemoveBookmark() {
    const list = bookmarks.value;
    toast.add({ title: "Successfully Removed!" });
    const index = list.data.findIndex((item: any) => item.id == route.params.id);
    list.data.splice(index, 1);
}

const modal = ref(false);

const items = [
    {
        key: "synopsis",
        label: "Synopsis"
    },
    {
        key: "info",
        label: "Info"
    },
    {
        key: "characters",
        label: "Characters"
    }
];
</script>

<template>

    <Head>
        <Title>{{ data?.info.title }}</Title>
    </Head>
    <div class="grid grid-cols-1 lg:grid-cols-[auto,1fr] gap-8 m-4">
        <div class="hidden lg:flex flex-col gap-2">
            <NuxtImg :src="data?.info.cover" :alt="data?.info.title" format="webp" quality="80" sizes="100vw"
                placeholder width="100" height="100" class="w-56 h-80 rounded-md object-cover" />
            <UButton icon="i-heroicons-bookmark-solid" label="Bookmarked" variant="ghost" size="lg" block
                @click="onRemoveBookmark" v-if="isBookmarked()" />
            <UButton icon="i-heroicons-bookmark" label="Bookmark" variant="ghost" size="lg" block @click="onAddBookmark"
                v-else />
            <UButton :to="`/stream/${route.params.id}/${data?.episodes.episodes[0].id}`"
                icon="i-heroicons-play-16-solid" label="Watch Now" variant="solid" size="lg" block
                v-if="data?.episodes.episodes.length > 0" />
            <UButton icon="i-heroicons-play-16-solid" label="Not Available" color="red" variant="solid" size="lg" block
                @click="toast.add({ title: 'Not Available!' })" v-else />
            <UButton icon="i-heroicons-bars-3-16-solid" label="Episodes" variant="solid" size="lg" block
                @click="modal = true" v-if="data?.episodes.episodes.length > 0" />
        </div>
        <div class="flex lg:hidden flex-col items-center gap-2">
            <NuxtImg :src="data?.info.cover" :alt="data?.info.title" format="webp" quality="80" sizes="100vw"
                placeholder width="100" height="100" class="w-40 h-60 md:w-48 md:h-72 rounded-md object-cover" />
            <div class="flex flex-col justify-center items-center text-center">
                <p class="text-base font-normal">{{ data?.info.season }} {{ data?.info.year }}</p>
                <p class="text-2xl font-bold line-clamp-3">{{ data?.info.title }}</p>
            </div>
            <UButton icon="i-heroicons-bookmark-solid" label="Bookmarked" variant="ghost" size="lg" block
                @click="onRemoveBookmark" v-if="isBookmarked()" />
            <UButton icon="i-heroicons-bookmark" label="Bookmark" variant="ghost" size="lg" block @click="onAddBookmark"
                v-else />
            <UButton :to="`/stream/${route.params.id}/${data?.episodes.episodes[0].id}`"
                icon="i-heroicons-play-16-solid" label="Watch Now" variant="solid" size="lg" block
                v-if="data?.episodes.episodes.length > 0" />
            <UButton icon="i-heroicons-play-16-solid" label="Not Available" color="red" variant="solid" size="lg" block
                @click="toast.add({ title: 'Not Available!' })" v-else />
            <UButton icon="i-heroicons-bars-3-16-solid" label="Episodes" variant="solid" size="lg" block
                @click="modal = true" v-if="data?.episodes.episodes.length > 0" />
        </div>
        <div class="flex flex-col gap-2">
            <div class="hidden lg:flex flex-col">
                <p class="text-base font-normal">{{ data?.info.season }} {{ data?.info.year }}</p>
                <p class="text-2xl font-bold line-clamp-2">{{ data?.info.title }}</p>
            </div>
            <div class="flex flex-wrap items-center gap-2">
                <UButton v-for="genre in data?.info.genres" :label="genre" color="gray" variant="solid" />
            </div>
            <UTabs :items="items" class="w-full">
                <template #item="{ item }">
                    <div v-if="item.key === 'synopsis'">
                        <UCard v-if="data?.info.description">
                            <div v-html="data?.info.description" class="text-base font-normal" />
                        </UCard>
                        <div v-else>
                            <UAlert title="Not Available" color="red" variant="soft" />
                        </div>
                    </div>
                    <div v-else-if="item.key === 'info'" class="space-y-2">
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
                            <div class="space-y-2">
                                <div>
                                    <UAlert title="Format" :description="data?.info.format" v-if="data?.info.format" />
                                    <UAlert title="Format" description="N/A" v-else />
                                </div>
                                <div>
                                    <UAlert title="Status" :description="data?.info.status" />
                                </div>
                            </div>
                            <div class="space-y-2">
                                <div>
                                    <UAlert title="Score" :description="data?.info.score" v-if="data?.info.score" />
                                    <UAlert title="Score" description="N/A" v-else />
                                </div>
                                <div>
                                    <UAlert title="Episodes" :description="String(data?.info.episodes)"
                                        v-if="data?.info.episodes" />
                                    <UAlert title="Score" description="N/A" v-else />
                                </div>
                            </div>
                        </div>
                        <UAlert title="Studio" :description="data?.info.studio" v-if="data?.info.studio" />
                        <UAlert title="Studio" description="N/A" v-else />
                    </div>
                    <div v-else-if="item.key === 'characters'" class="space-y-2">
                        <div class="grid grid-cols-1 lg:grid-cols-3 gap-2" v-if="data?.info.characters.length > 0">
                            <div v-for="character in data?.info.characters.slice(0, 9)">
                                <UAlert :title="character.name" :avatar="{ src: character.image, alt: character.name }">
                                    <template #avatar="{ avatar }">
                                        <UAvatar v-bind="avatar" size="xl" img-class="object-cover" />
                                    </template>
                                </UAlert>
                            </div>
                        </div>
                        <div v-else>
                            <UAlert title="Not Available" color="red" variant="soft" />
                        </div>
                    </div>
                </template>
            </UTabs>

            <USlideover v-model="modal">
                <div class="space-y-4 p-4 flex-1 overflow-y-auto h-full">
                    <div class="flex justify-between items-center">
                        <p class="text-xl font-bold">Episodes</p>
                        <UButton icon="i-heroicons-x-mark-16-solid" variant="ghost" trailing @click="modal = false" />
                    </div>
                    <div class="grid grid-cols-2 gap-2">
                        <UButton v-for="episode in data?.episodes.episodes"
                            :to="`/stream/${route.params.id}/${episode.id}`" :label="`Episode ${episode.episode}`"
                            variant="soft" block v-if="data?.episodes.episodes.length > 0" />
                    </div>
                </div>
            </USlideover>
        </div>
    </div>
    <div class="space-y-4 m-4" v-if="data?.recommendations.recommendations.length > 0">
        <div class="flex justify-between items-center">
            <p class="text-light text-xl font-bold uppercase">Recommendations</p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
            <ULink v-for="anime in data?.recommendations.recommendations.slice(0, 6)" :to="`/info/${anime.id}`"
                class="flex flex-col rounded-md gap-2">
                <div class="w-full h-full rounded-md overflow-hidden">
                    <NuxtImg :src="anime.cover" :alt="anime.title" format="webp" quality="80" sizes="100vw" placeholder
                        width="100" height="100"
                        class="w-full h-full rounded-md object-cover transition-transform hover:scale-110" />
                </div>
                <p class="font-medium truncate">{{ anime.title }}</p>
                <div class="flex items-center gap-2">
                    <UButton icon="i-heroicons-calendar-16-solid" :label="String(anime.year)" color="gray"
                        variant="solid" size="xs" />
                    <UButton icon="i-heroicons-star-16-solid" :label="anime.score ? anime.score : 'N/A'" color="gray"
                        variant="solid" size="xs" />
                </div>
            </ULink>
        </div>
    </div>
</template>