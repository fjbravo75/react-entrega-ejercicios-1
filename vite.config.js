import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

const ruta = (archivo) => fileURLToPath(new URL(archivo, import.meta.url));

export default defineConfig({
  base: "./",
  build: {
    outDir: "docs",
    minify: false,
    cssMinify: false,
    rollupOptions: {
      input: {
        index: ruta("./index.html"),
        ejercicio1: ruta("./ejercicio-1.html"),
        ejercicio2: ruta("./ejercicio-2.html"),
        ejercicio3: ruta("./ejercicio-3.html"),
        ejercicio4: ruta("./ejercicio-4.html"),
        ejercicio5: ruta("./ejercicio-5.html"),
        ejercicio6: ruta("./ejercicio-6.html"),
        ejercicio7: ruta("./ejercicio-7.html"),
        ejercicio8: ruta("./ejercicio-8.html"),
        ejercicio9: ruta("./ejercicio-9.html")
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "assets/styles.css";
          }

          return "assets/[name][extname]";
        },
        chunkFileNames: "assets/[name].js",
        entryFileNames: "assets/[name].js",
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            return "react";
          }

          return undefined;
        }
      }
    }
  },
  plugins: [react()]
});
