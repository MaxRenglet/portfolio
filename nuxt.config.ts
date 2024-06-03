// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   devtools: { enabled: true },
//   modules: [
//     '@nuxt/content',
//     '@nuxtjs/tailwindcss',
//     '@nuxtjs/google-fonts',
// "@nuxtjs/eslint-module"

//   ]

// })

export default {
    css: ['~/assets/css/main.scss'],
    googleFonts: {
        families: {
            REM: [600],
            'Open Sans': true,
            'Yatra One': true,
            // 'Josefin+Sans': true,
            // Lato: [100, 300],
            // Raleway: {
            //     wght: [100, 400],
            //     ital: [100],
            // },
            // Inter: '200..700',
            // 'Crimson Pro': {
            //     wght: '200..900',
            //     ital: '200..700',
            // },
        },
    },
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxt/content', '@hypernym/nuxt-gsap'],
}
