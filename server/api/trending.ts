export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const { page, per } = getQuery(event);
    const data: any = await $fetch(`${config.API}/api/trending?page=${page}&per=${per}`);
    return data
});