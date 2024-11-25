import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/react-portfolio/', // Use your GitHub repository name here
  plugins: [react()],
  esbuild: {
      jsxInject: `import React from 'react'`,
  },
});

