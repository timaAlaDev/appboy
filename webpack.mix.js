const mix = require('laravel-mix');

mix.js('resources/react/app.js', 'public/js')
    .react()
    .sass('resources/sass/app.scss', 'public/css');
