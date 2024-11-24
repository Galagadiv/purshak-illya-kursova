const gulp = require("gulp");
const fileInclude = require("gulp-file-include");
const sass = require("gulp-sass")(require("sass"));
const server = require("gulp-server-livereload");
const clean = require("gulp-clean");
const fileSys = require("fs");

const fileIncludeSettings = {
	prefix: "@@",
	basepath: "@file",
};
const severSettings = {
	livereload: true,
	open: true,
};

gulp.task("includeFiles", function () {
	return gulp
		.src("./src/*.html")
		.pipe(fileInclude(fileIncludeSettings))
		.pipe(gulp.dest("./dist"));
});

gulp.task("sass", function () {
	return gulp
		.src("./src/scss/*.scss")
		.pipe(sass())
		.pipe(gulp.dest("./dist/css/"));
});

gulp.task("copyImgs", function () {
	return gulp.src("./images/**/*").pipe(gulp.dest("./dist/img/")); //будь який файл будь яка папка
});

gulp.task("startServer", function () {
	return gulp.src("./dist/").pipe(server(severSettings));
});

gulp.task("cleanDist", function (done) {
	return fileSys.existsSync("./dist/")
		? gulp.src("./dist/").pipe(clean())
		: done();
});
