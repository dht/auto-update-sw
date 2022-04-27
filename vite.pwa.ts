import { VitePWAOptions } from 'vite-plugin-pwa';

export const pwaOptions: Partial<VitePWAOptions> = {
    mode: 'production',
    base: '/',
    srcDir: 'src',
    filename: 'prompt-sw.ts',
    strategies: 'injectManifest',
    includeAssets: ['favicon.svg'],
    registerType: 'autoUpdate',
    workbox: {
        cleanupOutdatedCaches: true,
        sourcemap: true,
    },
    manifest: {
        name: 'PWA Router',
        short_name: 'PWA Router',
        theme_color: '#ffffff',
        icons: [
            {
                src: '/pwa-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/pwa-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
            {
                src: '/pwa-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any maskable',
            },
        ],
    },
    devOptions: {
        enabled: false,
        type: 'module',
        navigateFallback: 'index.html',
    },
};
