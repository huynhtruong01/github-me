import react from "@vitejs/plugin-react"
import path from "path"
import { defineConfig } from "vite"

const config = defineConfig(() => {
  const aliases = {
    "@": path.resolve(__dirname, "./src/"),
  }

  return {
    plugins: [react()],
    server: {
      port: 3000,
    },
    resolve: {
      alias: aliases,
    },
    cache: true,
  }
})

export default config
