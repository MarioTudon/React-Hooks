import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import { resolve } from 'path';

export default defineConfig({
    root: resolve(__dirname, 'src'),
    base: '',
    plugins: [
        react,
        createHtmlPlugin({
            minify: true
        })
    ],
    build: {
        outDir: resolve(__dirname, './dist'),
        assetsDir: './assets',
        minify: true,
        rollupOptions: {
            input: resolve(__dirname, './src/index.html')
        }
    }
});