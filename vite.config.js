import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize bundle size
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate Three.js and React into their own chunks
          'three': ['three'],
          'react-vendor': ['react', 'react-dom'],
          'three-fiber': ['@react-three/fiber', '@react-three/drei'],
        }
      }
    },
    // Enable compression
    minify: 'esbuild',
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
  },
  server: {
    // Enable HTTPS for AR testing (required for some AR features)
    // https: true,
    host: true, // Allow external access for mobile testing
    port: 3000,
  },
  // Optimize static assets
  assetsInclude: ['**/*.obj', '**/*.glb', '**/*.gltf'],
})
