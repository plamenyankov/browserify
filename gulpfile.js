/**
 * Created by vipbs on 27/03/2016.
 */
var gulp = require('gulp');
var browserify = require('gulp-browserify');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var hbsfy = require('browserify-handlebars');
gulp.task('js',function(){
   gulp.src('src/js/app.js')
       .pipe(browserify({
           debug:true,
           transform: [hbsfy]
       }))
       .pipe(uglify())
       .pipe(gulp.dest('dist/js/'))
       .pipe(connect.reload())
});
gulp.task('connect', function() {
    connect.server({
        root: '',
        livereload: true
    });
});
gulp.task('watch',function(){
   gulp.watch('src/js/*.js',['js']);
});
gulp.task('default', ['js', 'connect', 'watch']);