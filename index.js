const readDir = require('./readDir');
const im = require('imagemagick');
const identify = require('./identify');
const identifyHeightWidth = identify('%wx%h');
const explodeDimentions = require('./explodeDimentions');

console.log("##################");
const dir = './images';
const maxWidth = 2400;

readDir(dir)
.then(files => {
    files.map((fileName) => {
      identifyHeightWidth(`${dir}/${fileName}`)
      .then((result) => explodeDimentions(result), (err) => err)
      .then((dimentions) => {
        if (dimentions.width > maxWidth) {
          console.log("to resize", fileName, dimentions);
          im.resize({
            srcPath: `${dir}/${fileName}`,
            dstPath: `${dir}/${fileName}`,
            width:   maxWidth
          }, function(err, stdout, stderr){
            if (err) throw err;
            console.log(`Resized ${dir}/${fileName} to width : ${maxWidth} `);
          });

        } else {
          console.log("untouched", fileName, dimentions);
        }
        return dimentions;
      }, (err) => err)
    });
})
.catch( error => {
    console.log( error );
});
