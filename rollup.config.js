import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default [
  {
    input: 'packages/color-scheme/src/color-scheme.js',
    output: [
      {
        file: 'packages/color-scheme/dist/index.js',
        format: 'es',
      },
      {
        file: 'packages/color-scheme/color-scheme.min.js',
        format: 'umd',
        name: 'colorScheme',
        plugins: [terser()],
      },
    ],
    plugins: [
      resolve(),
      babel({ babelHelpers: 'bundled' }),
    ]
  },
]
