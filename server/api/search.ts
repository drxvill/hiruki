export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const { q } = getQuery(event);
    const data: any = await $fetch(`${config.API}/api/search?q=${q}`);
    return data
});