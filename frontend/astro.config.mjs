import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://romariko.by',
  output: 'static',
  publicDir: '../assets',
  trailingSlash: 'never',
});
