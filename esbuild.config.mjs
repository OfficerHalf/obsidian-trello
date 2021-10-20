import esbuild from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';

const isProd = process.env.BUILD_MODE === 'production';
const watch = process.env.BUILD_MODE === 'watch';

try {
  await esbuild.build({
    logLevel: 'info',
    entryPoints: ['src/main.ts', 'src/styles.scss'],
    bundle: true,
    format: 'cjs',
    outbase: 'src',
    outdir: '.',
    external: ['obsidian'],
    define: {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    },
    minify: isProd,
    sourcemap: !isProd,
    watch,
    plugins: [
      sassPlugin({
        cache: watch
      })
    ]
  });
} catch {
  process.exit(1);
}
