/** @type {import('tailwindcss').Config} */

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'../../packages/ui/src/lib/**/*.{svelte,ts}',
	],
	purge: [
		"./**/*.svelte",
		"./**/*.html"
	],
	theme: {
		extend: {
			colors: {
				primary: '#24FFBC',
				'custom-border': '#24FFBC',
				secondary: '#9333EA',
				background: '#0B0B0F',
				text: '#E5E7EB'
			},
			borderWidth: {
				1: '1px',
			},
			fontFamily: {
				sans: ['SF Pro Display', 'sans-serif']
			},
			spacing: {
				18: '4.5rem'
			},
			backgroundImage: {
				'gradient-custom': 'linear-gradient(132.15deg, #0B0B0F 0%, rgba(26, 26, 34, 0.9) 95.96%)'
			}
		}
	},
	variants: {},
	plugins: []
};
