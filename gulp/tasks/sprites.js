var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite'),
rename = require('gulp-rename'),
del = require('del');

// Which mode svg sprite package should use
var config = {
  mode: {
    css: {
      sprite: 'sprite.svg',
      // render out css
      render: {
        css: {
          // Provide CSS template file, package will fill in blanks in the template with information about each icon
          template: './gulp/templates/sprite.css'
        }
      }
    }
  }
}

// Remove any sprite files after new once are generated when you remove or add new icons.
gulp.task('beginClean', function() {
  // Indicate the array of folders you want to delete
  return del(['./app/temp/sprite', './app/assets/images/sprite']);
});

// First argument is the name of the task, second argument the dependencies, third argument what the task should do.
gulp.task('createSprite', ['beginClean'], function() {
  // Grab any files with an .svg extension in any folder contained in the icons folder.
  return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprite/'));
});

// Stay organized and move the sprites file into the main app images folder
gulp.task('copySpriteGraphic', ['createSprite'], function() {
  return gulp.src('./app/temp/sprite/css/**/*.svg')
    .pipe(gulp.dest('./app/assets/images/sprites'));
});

// Ensure that all CSS files stay organized, so copy the css to a new destination and in the process rename it with an underscore so that all the module CSS files follow the same file naming pattern.

// copySpriteCSS is now dependent on createSprite, i.e. createSprite should finish before copySpriteCSS begins.
gulp.task('copySpriteCSS', ['createSprite'], function() {
  return gulp.src('./app/temp/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./app/assets/styles/modules'));
});

// temp sprite folder no longer needed, delete it.
gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], function(){
  return del('./app/temp/sprite');
});

// In [], list the different tasks that need to be run.
gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteGraphic','copySpriteCSS', 'endClean']);
