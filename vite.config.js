import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.gif', '**/*.svg'],
  build: {
    // 청크 크기 최적화
    rollupOptions: {
      output: {
        manualChunks: {
          // Three.js 및 3D 렌더링 라이브러리를 별도 청크로 분할
          'three-bundle': ['three', '@react-three/fiber', '@react-three/drei'],
          // 애니메이션 라이브러리 분할
          'animation': ['framer-motion', 'react-spring'],
          // 맵/지도 라이브러리 분할
          'map': ['leaflet', 'react-leaflet'],
          // i18n 라이브러리 분할
          'i18n': ['i18next', 'i18next-browser-languagedetector', 'react-i18next', 'i18next-http-backend'],
          // UI 아이콘 라이브러리 분할
          'icons': ['react-icons', 'lucide-react'],
        },
      },
    },
    // 청크 크기 경고 임계값
    chunkSizeWarningLimit: 1000,
    // 소스맵 최소화 (프로덕션 성능 향상)
    sourcemap: false,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.js',
  },
})
