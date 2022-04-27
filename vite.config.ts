import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        sourcemap: 'inline',
    },
    plugins: [
        tsconfigPaths({
            loose: true,
        }),
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            workbox: {
                cleanupOutdatedCaches: false,
                sourcemap: true,
            },
        }),
    ],
    define: {},
    resolve: {
        alias: {},
    },
    server: {
        host: true,
        port: 3100,
    },
});
