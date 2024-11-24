const gulp = require("gulp");
const fileInclude = require("gulp-file-include");
const sass = require("gulp-sass")(require("sass"));
const server = require("gulp-server-livereload");
const clean = require("gulp-clean");
const fileSys = require("fs");
const sourceMaps = require("gulp-sourcemaps");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const error = require("console");

const fileIncludeSettings = {
	prefix: "@@",
	basepath: "@file",
};
const severSettings = {
	livereload: true,
	open: true,
};
const plumberSassConf = {
	errorHandler: notify.onError({
		title: "Styles",
		messege: "Error <%= error.message %>",
		sound: false,
	}),
};

gulp.task("html", function () {
	return gulp
		.src("./src/**/*.html")
		.pipe(fileInclude(fileIncludeSettings))
		.pipe(gulp.dest("./dist"));
});

gulp.task("sass", function () {
	return gulp
		.src("./src/scss/**/*.scss")
		.pipe(plumber(plumberSassConf))
		.pipe(sourceMaps.init())
		.pipe(sass())
		.pipe(sourceMaps.write())
		.pipe(gulp.dest("./dist/css/"));
});

gulp.task("images", function () {
	return gulp.src("./images/**/*").pipe(gulp.dest("./dist/images/")); //будь який файл i будь яка папка
});

gulp.task("server", function () {
	return gulp.src("./dist").pipe(server(severSettings));
});

gulp.task("clean", function (done) {
	return fileSys.existsSync("./dist/")
		? gulp.src("./dist/", {read: false}).pipe(clean({force: true}))
		: done();
});

gulp.task("watch", function () {
	gulp.watch("./src/scss/**/*.scss", gulp.parallel("sass"));
	gulp.watch("./src/**/*.html", gulp.parallel("html"));
	gulp.watch("./images/**/*", gulp.parallel("images"));
});

gulp.task(
	"default",
	gulp.series(
		"clean",
		gulp.parallel("html", "sass", "images"),
		gulp.parallel("server", "watch")
	)
);
