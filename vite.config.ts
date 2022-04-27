import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { VitePWA } from 'vite-plugin-pwa';
import { pwaOptions } from './vite.pwa';
import replace from '@rollup/plugin-replace';

const replaceOptions = { __DATE__: new Date().toISOString() };

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
        VitePWA(pwaOptions),
        replace(replaceOptions),
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
