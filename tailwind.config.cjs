/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
      'grey': {
        600: '#3A3A3A',
        700: '#1D201F',
        900: '#121518',
      },
			'yellow': {
				600: '#E39E49',
				500: '#FFB355'

			}
    },
	},
	plugins: [],
}
