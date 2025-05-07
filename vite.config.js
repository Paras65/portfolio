import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio/', // Replace 'portfolio' with your repository name
  plugins: [react()],
});
