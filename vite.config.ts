import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import svg from '@poppanator/sveltekit-svg';

export default defineConfig({
	plugins: [sveltekit(), tailwindcss(), svg({
		includePaths: ['./src/lib/icons/', './src/assets/icons/'],
		svgoOptions: {
			multipass: true,
			plugins: [
				{
					name: 'preset-default',
					params: { overrides: { removeViewBox: false, cleanupIds: false } },
				},
				{ name: 'removeAttrs', params: { attrs: '' } },
			],
		}
	})]
});
