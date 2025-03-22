import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
// import adapter from '@sveltejs/adapter-netlify';
import adapter from '@sveltejs/adapter-node';

export default {
  preprocess: [vitePreprocess()],
  kit: {
	adapter: adapter()
	}
};