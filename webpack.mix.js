const mix = require('laravel-mix');
mix.disableNotifications();

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
mix.styles([
  'dist/css/output.css',
  'dist/libs/slick/slick.css',
  'dist/libs/uikit/uikit.min.css',
], 'dist/mix/app.min.css');

mix.scripts([
  'dist/libs/jquery/jquery-3.6.4.min.js',
  'dist/libs/slick/slick.min.js',
  'dist/libs/uikit/uikit.min.js',
  'dist/js/app.js',
], 'dist/mix/app.min.js');