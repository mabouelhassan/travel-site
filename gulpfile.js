var gulp = require("gulp");
var watch = require("gulp-watch");

gulp.task('default', function(cb){
    console.log('Hooray - you created a gulp task');
    cb();
});

gulp.task('html', function(cb){
    console.log('Imagine something useful being done here');
    cb();
});

gulp.task('styles', function(cb){
    console.log('This is the styles gulp function running');
    cb();
});

gulp.task('watch', function(){
    watch('./app/index.html', function(){
        gulp.start('html');
    });
    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('styles');
    });
});