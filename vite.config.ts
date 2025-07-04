import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/amino-seq/",
    resolve: {
        alias: {
            "@app": "/src/",
            "@pages": "/src/pages",
            "@widgets": "/src/widgets",
            "@features": "/src/features",
            "@entities": "/src/entities",
            "@shared": "/src/shared",
        },
    },
});
