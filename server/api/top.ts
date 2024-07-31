export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const data: any = await $fetch(`${config.API}/api/top?page=1&per=10`);
    return data
});