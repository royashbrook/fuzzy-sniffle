/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: '/',
    src: '/build',
  },
  plugins: [
    '@snowpack/plugin-svelte',
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018',
  },
  packageOptions: {
    knownEntrypoints: ['svelte','svelte/store'],
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};