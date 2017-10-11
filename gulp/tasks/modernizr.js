var gulp = require('gulp'),
modernizr = require('gulp-modernizr');

gulp.task('modernizr', function() {

  // Point to the JS and CSS files in gulp.src, pipe that group of files through the modernizr package. It will look at the code and automatically determine which features to test for, it will generate a lightweight custom modernizr file. Then you pipe the resulting file to the destination.

  // Use two directors in gulp.src (you want to grab and look into both css and js files).

  return gulp.src(['./app/assets/styles/**/*.css', './app/assets/scripts/**/*.js'])
    .pipe(modernizr({
      "options": [
        "setClasses"
      ]
    }))
    .pipe(gulp.dest('./app/temp/scripts/'));
});
