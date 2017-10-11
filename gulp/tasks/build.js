var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browserSync = require('browser-sync').create();

// preview the dist folder in the browser
gulp.task('previewDist', function(){
  browserSync.init({
    notify: false,
    server: {
      baseDir: "docs"
    }
  });
});

// first delete the dist folder to begin each build with a new slate
// (for example if any files are deleted, this should be reflected in the dist folder so that this folder does not runs behind)
gulp.task('deleteDistFolder', ['icons'], function(){
  return del('./docs');
});

gulp.task('copyGeneralFiles', ['deleteDistFolder'], function(){
  var pathsToCopy = [
    './app/**/*',
    '!./app/index.html',
    '!./app/assets/images/**',
    '!./app/assets/styles/**',
    '!./app/assets/scripts/**',
    '!./app/temp',
    '!./app/temp/**'
  ]

  return gulp.src(pathsToCopy)
    .pipe(gulp.dest('./docs'));
});

// copy & compress all image files
// with '!./' you can exclude files and folders

// you can also import tasks from other files, such as the 'icons' task from the sprites.js file
gulp.task('optimizeImages', ['deleteDistFolder'], function(){
  return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      multipass: true
    }))
    .pipe(gulp.dest('./docs/assets/images'));
});

gulp.task('useminTrigger', ['deleteDistFolder'], function(){
  gulp.start('useMin');
});

// copy over the css and js files that are referenced in the index.html file to the dist folder (the css and js files without all the modules)
gulp.task('useMin', ['styles', 'scripts'], function(){
  return gulp.src('./app/index.html')
    .pipe(usemin({
      // tell usemin what to do with the css and js files, in the array provide the functions or filters that you want to perform

      // in the css property, in the array the first item is for revisioning the file, the second for compression
      // include return so that gulp is aware when the function completes
      css: [rev, cssnano],
      js: [rev, uglify]
    }))
    .pipe(gulp.dest('./docs/'));
});

gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles','optimizeImages', 'useminTrigger']);
