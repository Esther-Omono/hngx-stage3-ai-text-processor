import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

globalThis.process = globalThis.process || { cwd: () => '.' };

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    define: {
      'process.env.VITE_TRANSLATOR_TOKEN': JSON.stringify(env.VITE_TRANSLATOR_TOKEN),
      'process.env.VITE_DETECTOR_TOKEN': JSON.stringify(env.VITE_DETECTOR_TOKEN),
      'process.env.VITE_SUMMARIZER_TOKEN': JSON.stringify(env.VITE_SUMMARIZER_TOKEN),
    }
  };
});
