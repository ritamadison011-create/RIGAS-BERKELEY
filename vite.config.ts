import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

function copyDir(src: string, dest: string) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

export default defineConfig(() => {
  return {
    plugins: [
      react(), 
      tailwindcss(),
      {
        name: 'copy-static-assets',
        closeBundle() {
          const distDir = path.resolve(__dirname, 'dist');
          const distAssetsImages = path.resolve(distDir, 'assets/images');
          const srcImages = path.resolve(__dirname, 'assets/images');
          
          // Copy script.js to dist
          const srcScript = path.resolve(__dirname, 'script.js');
          const destScript = path.resolve(distDir, 'script.js');
          if (fs.existsSync(srcScript)) {
            fs.copyFileSync(srcScript, destScript);
            console.log('Successfully copied script.js to dist/');
          }
          
          // Copy assets/images to dist/assets/images
          if (fs.existsSync(srcImages)) {
            copyDir(srcImages, distAssetsImages);
            console.log('Successfully copied assets/images to dist/assets/images/');
          }
        }
      }
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
