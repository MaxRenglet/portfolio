/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./components/*/*.{js,vue,ts}', './app.vue', './error.vue'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
                title: ['REM', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
}
