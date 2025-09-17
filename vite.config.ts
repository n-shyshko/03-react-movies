// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// });

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// конфіг для Vite, щоб підтягувати змінні з .env
export default defineConfig(({ mode }) => {
  // loadEnv завантажує .env для поточного mode
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    define: {
      // робимо змінні доступними як process.env.*, якщо потрібно
      "process.env": env,
    },
  };
});
