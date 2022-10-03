import preact from '@preact/preset-vite';
import * as path from 'path';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const domain = (env.VITE_DOMAIN_BASE.slice(-1) === '/')
    ? env.VITE_DOMAIN_BASE.slice(0, -1)
    : env.VITE_DOMAIN_BASE;

  let basePath = env.VITE_BASE_PATH;
  // Add first slash if not present
  if (basePath.slice(0, 1) !== '/') {
    basePath = '/' + ((basePath.length === 1) ? '' : basePath);
  }
  // Add trailing slash if not present
  if (basePath.slice(-1) !== '/') {
    basePath = ((basePath.length === 1) ? basePath : basePath) + '/';
  }

  return defineConfig({
    plugins: [preact()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      port: Number.parseInt(env.VITE_PORT),
    },
    base: domain + basePath,
  });
};
