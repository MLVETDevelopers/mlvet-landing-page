/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    // 
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        colors: {
            grey: {
                300: '#DEDEDE',
                600: '#3A3A3A',
                700: '#1D201F',
                900: '#121518',
            },
            yellow: {
                500: '#FFB355',
                600: '#E39E49',
            },
        },
        fontFamily: {
            sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        },
    },
    plugins: [],
}
