import { vite as vidstack } from "vidstack/plugins";

export default defineNuxtConfig({
    modules: ["@nuxt/ui", "@nuxt/fonts", "@nuxt/image", "@nuxtjs/seo"],
    vue: { compilerOptions: { isCustomElement: (tag) => tag.startsWith("media-") } },
    vite: { plugins: [vidstack({ include: /player\// })] },
    devtools: { enabled: false },
    fonts: { families: [{ name: "Outfit", provider: "google" }] },
    colorMode: { preference: "dark" },
    site: {
        url: "https://hiruki.xyz",
        name: "Hiruki",
        description: "Discover your new favorite anime title! Hiruki offers a vast collection of high-quality content, accessible on multiple devices and without any interruptions. Start using Hiruki today!",
        defaultLocale: "en",
        indexable: true
    },
    runtimeConfig: {
        API: process.env.API_URL,
        public: {
            WALINE: process.env.WALINE_URL
        }
    }
});