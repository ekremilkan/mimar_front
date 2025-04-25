import { defineConfig } from "vite";
import sitemap from "vite-plugin-sitemap";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    compression({ algorithm: "brotliCompress", ext: ".br" }), // Brotli sıkıştırma
    compression({ algorithm: "gzip", ext: ".gz" }), // Gzip sıkıştırma
    sitemap({
      hostname: "https://tourtotour.com",
      dynamicRoutes: ["/tour/:slug", "/blog/:slug"],
    }),
  ],
  base: "/", // Proje kök yolu
  build: {
    sourcemap: false, // Harita dosyalarını kaldır
    minify: "esbuild", // Daha hızlı ve etkili minify işlemi
    cssCodeSplit: true, // CSS dosyalarını ayır
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"], // Vendor splitting
        },
      },
    },
    assetsInlineLimit: 4096, // Küçük dosyaları inline yap (4 KB altında)
    chunkSizeWarningLimit: 500, // Chunk boyut limitini artır (KB)
    outDir: "dist", // Çıkış klasörü
  },
  server: {
    open: true, // Sunucu başlatıldığında tarayıcıyı aç,
  },
});
