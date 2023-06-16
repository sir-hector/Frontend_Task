const gulp = require('gulp');
const coffee = require('gulp-coffee');

gulp.task('coffee', function() {
  return gulp.src('./src/*.coffee')
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', gulp.series('coffee'));