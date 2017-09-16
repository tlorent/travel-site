var gulp = require('gulp'),
watch = require('gulp-watch');

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
  console.log("Useful CSS stuff.");
});

gulp.task('watch', function() {

  // You pass two arguments: one for the file you want to watch
  // the second, what needs to happen when Gulp watches
  watch('./app/index.html', function() {
    gulp.start('html') // Indicate which Gulp task should be started
  });

  /* with **, watch for any future hypothetical folders in the styles
  folder, with any .css extensions */
  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  });

});
