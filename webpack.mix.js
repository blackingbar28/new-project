let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('src/js/app.js', 'public/js').version();
mix.sass('src/sass/app.scss', 'public/css');

mix.copyDirectory('src/libs', 'public/libs');
mix.copyDirectory('src/img', 'public/img');

mix.autoload({
  jquery: ['$', 'window.jQuery',"jQuery","window.$","jquery","window.jquery"]
});