const readFiles = require('./readFiles');
const readDir = require('./readDir');
const im = require('imagemagick');
const identify = require('./identify');
const identifyHeightWidth = identify('%wx%h');
const explodeDimentions = require('./explodeDimentions');

console.log("##################");
const dir = './images';
const maxWidth = 1200;
let filesToRisize = 0;

readDir(dir)
.then(files => {
    files.map((fileName) => {
      identifyHeightWidth(`${dir}/${fileName}`)
      .then((result) => explodeDimentions(result), (err) => err)
      .then((dimentions) => {
        if (dimentions.width > maxWidth) {
          console.log("to resize", fileName, dimentions);
          filesToRisize++;
        } else {
          // console.log("untouched", fileName, dimentions);
        }
        return dimentions;
      }, (err) => err)
      .then((result) => {
        console.log(("################"));
        console.log(`${filesToRisize} files to resize`)
        return result;
      }, (err) => err)
    });
})
.catch( error => {
    console.log( error );
});
