import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import bundleSize from 'rollup-plugin-bundle-size';
import replace from 'rollup-plugin-replace';

var env = process.env.NODE_ENV;
var config = {
  entry: 'src/main.js',
  format: 'cjs',
  plugins: [ 
    bundleSize(),

    // resolve node_modules
    resolve({
      jsnext: true
    }), 

    // ensure that node_modules are formatted to commonjs
    commonjs(),

    // transpile source code
    babel({
      exclude: 'node_modules/**'
    }),

    replace({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),

  ],
  dest: 'embed.cjs.js'
};

if (env === 'production') {
  config.plugins.push(
    uglify({
      compress: {
        sequences: true,
        dead_code: true,
        conditionals: true,
        booleans: true,
        unused: true,
        if_return: true,
        join_vars: true,
        drop_console: true,
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
  )
}

export default config;
