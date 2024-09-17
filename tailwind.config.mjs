/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			backgroundImage:{
				'eudald-mountain' : "url(/public/EudaldAmpl.jpg)",
				'eudald-intro' : "url(/public/EudaldIrlanda.jpg)"
			},
		},
	},
	plugins: [],
}
