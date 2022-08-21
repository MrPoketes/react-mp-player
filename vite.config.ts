import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-dts';

export default defineConfig({
	build: {
		lib: {
			entry: 'src/index.ts',
			formats: ['es', 'cjs']
		},
		rollupOptions: {
			external: ['react', 'react-dom'],
			output: {
				sourcemapExcludeSources: true
			}
		},
		target: 'esnext',
		sourcemap: true,
		minify: false
	},
	plugins: [react(), dts()]
});
