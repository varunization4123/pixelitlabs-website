import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';

export default {
    preprocess: preprocess({
    scss: {
      includePaths: ['src'],
    },
  }),
    kit: {
        // default options are shown
        files: {
            assets: 'static',
            routes: 'src/routes',
            // Add the 'public' option to serve files from the 'public' folder
            public: 'public',
        },
        adapter: adapter({
            // if true, will create a Netlify Edge Function rather
            // than using standard Node-based functions
            edge: true,

            // if true, will split your app into multiple functions
            // instead of creating a single one for the entire app.
            // if `edge` is true, this option cannot be used
            split: false
        })
    }
};

