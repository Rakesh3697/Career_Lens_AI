import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    host: true, // This enables 0.0.0.0 automatically
    port: 10000, // Default for local preview, Render overrides this via CLI
    strictPort: true,
  },
  server: {
    host: true,
  }
});
