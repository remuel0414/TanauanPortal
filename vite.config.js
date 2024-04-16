import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
    let base = '/TanauanPortal/';
    
    // Use root base for local development
    if (command === 'serve') {
        base = '/';
    }

    return {
        plugins: [react()],
        base: base,
        server: {
            port: 3000,
            proxy: {
                '/api': {
                    target: 'http://localhost:8000',
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, ''),
                },
            },
        },
    };
});
