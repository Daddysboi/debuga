import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@pages": "/src/pages",
      "@components": "/src/components",
    },
  },
  plugins: [react()],
});
