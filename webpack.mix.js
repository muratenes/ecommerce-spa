const mix = require('laravel-mix');
const path = require('path');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .webpackConfig({
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'resources/js/src'),
                '@modules': path.resolve(__dirname, 'resources/js/src/modules'),
                '@category': path.resolve(__dirname, 'resources/js/src/modules/category'),
                '@product': path.resolve(__dirname, 'resources/js/src/modules/product'),
                '@store': path.resolve(__dirname, 'resources/js/src/modules/store'),
            }
        }
    })
// // .postCss('resources/css/app.css', 'public/css', [
// //     //
// ]);
