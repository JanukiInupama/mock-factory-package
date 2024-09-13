import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts', 
  output: [
    {
      file: 'dist/index.js', 
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.mjs', // ES module output
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(), // Resolves node_modules
    commonjs(), // Converts CommonJS modules to ES6
    typescript(), // Compiles TypeScript
  ],
};
