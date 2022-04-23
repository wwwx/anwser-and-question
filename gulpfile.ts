import { series, parallel, src, dest } from 'gulp';
import uglify from 'gulp-uglify';
import minifyCSS from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import htmlmin from 'gulp-htmlmin';
import path from 'path';
import { exec } from 'child_process';

const outputPath = path.resolve(__dirname, 'nga-web');

const executor = (cmd: string, callback: Function, cwd: string) => {
  exec(cmd, { cwd, maxBuffer: 10 * 1000 * 1024 }, (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`);
      return callback(err);
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
    callback();
  });
};

const apk = () => {
  return src(['src/apk/*']).pipe(dest(`${outputPath}/apk`));
};

const html = () => {
  return src(['src/*.html'])
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest(`${outputPath}`));
};

const javascript = () => {
  return src(['src/js/*.js'])
    .pipe(uglify())
    .pipe(dest(`${outputPath}/js`));
};

const css = () => {
  return src(['src/css/*.css'])
    .pipe(autoprefixer())
    .pipe(minifyCSS())
    .pipe(dest(`${outputPath}/css`));
};

const image = () => {
  return src(['src/assets/images/*.*']).pipe(dest(`${outputPath}/assets/images`));
};

// Clean
const clean = (callback: Function) => executor(`npx rimraf ${outputPath}`, callback, __dirname);

// Watch
const handleWatch = () => {};

exports.clean = clean;
exports.build = series(clean, parallel(apk, html, javascript, css, image));
