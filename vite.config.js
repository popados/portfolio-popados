import { defineConfig } from "vite";

export default defineConfig({
    root: ".",
    // base: "/portfolio-popados/",
    build: {
        outDir: "dist",
        emptyOutDir: true,
    },
    server: {
        open: true,
    },
});
