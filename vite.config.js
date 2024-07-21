// vite.config.js
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import envCompatible from "vite-plugin-env-compatible";

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` (development, production, etc.)
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      react(),
      envCompatible({
        prefix: "",
      }),
    ],
    define: {
      // Stringify environment variables for client-side use
      "process.env": {
        API_URL: JSON.stringify(env.API_URL),
      },
    },
  };
});
