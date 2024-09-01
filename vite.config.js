import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import svgr from '@svgr/rollup';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), svgr({ 
    svgrOptions: {
      // svgr options
    },
  }),],
})
