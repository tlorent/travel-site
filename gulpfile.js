var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
browserSync = require('browser-sync').create();

/*
You use the task method of gulp to create a new task.
The first argument is the name you give to the task,
the second argument is what will happen when this task runs.
*/
gulp.task('default', function() {
  console.log("You created a Gulp task!");
});

gulp.task('html', function() {
  console.log("Something useful being done to my HTML here.");
});

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    // The second pipe connects gulp source with gulp destination
    // The first pipe allows the CSS to run through post-css filters
    // the postcss function requires an array of postcss filters that you can use
    // such as CSS variables, nesting, autoprefixes
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function() {

  // Initialize the browsersync init method
  // and indicate where the base directory of the server should get the html
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  })

  // You pass two arguments: one for the file you want to watch
  // the second, what needs to happen when Gulp watches
  watch('./app/index.html', function() {
    browserSync.reload();
  });

  /* with **, watch for any future hypothetical folders in the styles
  folder, with any .css extensions */
  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('cssInject'); // Indicate which Gulp task should be started
  });

});

/* As the second argument, add the 'styles' task as a dependency
"Gulp, before you run the cssInject task, you must begin & complete"
any dependency tasks listed in the second argument. */
gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream()); // make whatever you're piping into browserSync available in the browser
})
