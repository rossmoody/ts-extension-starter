import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/background.ts',
  output: {
    dir: 'public/dist',
    format: 'iife',
  },
  plugins: [typescript()],
}
