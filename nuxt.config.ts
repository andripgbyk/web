import { defineNuxtConfig } from "nuxt/config";
import botikaPreset from "botika-ui/tailwind";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    // https://v3.nuxtjs.org/api/configuration/nuxt-config#modules
    modules: [
        // https://content.nuxtjs.org/
        ["@nuxt/content", {}],
        // https://tailwindcss.nuxtjs.org/
        ["@nuxtjs/tailwindcss", {
            exposeConfig: true,
            viewer: false,
            config: {
                presets: [
                    botikaPreset
                ]
            }
        }],
        // Botika UI
        ["botika-ui/nuxt", {}]
    ],

    // https://v3.nuxtjs.org/guide/going-further/runtime-config
    runtimeConfig: {
        // The private keys which are only available within server-side
        apiSecret: "123",
        // Keys within public, will be also exposed to the client-side
        public: {
            apiBase: "/api"
        }
    },

    // https://v3.nuxtjs.org/api/configuration/nuxt.config#srcdir
    srcDir: "src/",

    // https://v3.nuxtjs.org/api/configuration/nuxt.config#typescript
    typescript: {
        strict: true
    }
});
