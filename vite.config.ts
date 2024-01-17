import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        sassOptions: { quietDeps: true },
        // additionalData: `
        //   @import "src/assets/styles/_resources.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      src: '/src',
    },
  },
});
