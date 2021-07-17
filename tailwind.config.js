module.exports = {
  darkMode: 'class', // media or class or false
  mode: 'jit',
  // Don't add a glob below `public` as Rollup doesn't
  // recognize them and will rebuild in an infinite loop.
  purge: [
    './src/**/*.svelte',
    './src/**/*.html',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        svelte: '#ff3e00',
      },
    },
  },
  variants: {},
  plugins: [],
}
