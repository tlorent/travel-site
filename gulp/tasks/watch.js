var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

/*
You use the task method of gulp to create a new task.
The first argument is the name you give to the task,
the second argument is what will happen when this task runs.
*/
gulp.task('watch', function() {

  // Initialize the browsersync init method
  // and indicate where the base directory of the server should get the html
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

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

  watch('./app/assets/scripts/**/*.js', function() {
    gulp.start('scriptsRefresh');
  })

});

/* As the second argument, add the 'styles' task as a dependency
"Gulp, before you run the cssInject task, you must begin & complete"
any dependency tasks listed in the second argument. */
gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream()); // make whatever you're piping into browserSync available in the browser
})

gulp.task('scriptsRefresh', ['scripts'], function() {
  browserSync.reload();
})
