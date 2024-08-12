import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  dts: true,
  entry: ['src/**/*.ts'],
  env: {
    NODE_ENV: 'production',
  },
  format: ['cjs', 'esm'],
  target: 'es2022',
  treeshake: true,
});
