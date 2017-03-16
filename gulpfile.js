/**
 * Created by Administrator on 2017/2/14.
 */
//1. 全局安装‘gulp npm install gulp-cli -g’
//2. 在当前项目中下载 ‘npm install gulp -D’ `npm install gulp --save-dev`
//3. 在当前项目的根目录下创建 gulpfile.js配置文件
//4. 引用gulp通过gulp进行开发


//require类似于script:src，通过require加载gulp包
var gulp = require('gulp');

//创建一个gulp任务
//default这是gulp的任务名称
gulp.task('default2', function () {
    console.log('hello gulp');
});