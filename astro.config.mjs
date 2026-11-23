import { defineConfig } from 'astro/config';

export default defineConfig({
  image: {
    remotePatterns: [{ protocol: 'https', hostname: 'raw.githubusercontent.com' }],
  },
});
