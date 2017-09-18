var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import');

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    // The second pipe connects gulp source with gulp destination
    // The first pipe allows the CSS to run through post-css filters
    // the postcss function requires an array of postcss filters that you can use
    // such as CSS variables, nesting, autoprefixes
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});
