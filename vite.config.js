import { defineConfig } from 'vite';

export default defineConfig({
  // 指定入口 HTML 文件的路径
  build: {
    rollupOptions: {
      input: {
        main: './public/index.html' // 替换为你实际的 index.html 路径
      }
    }
  }
});