const fs = require('fs');

const readDirPr = (dirname) => new Promise( (resolve, reject) => {
  fs.readdir(dirname,
    (err, filenames) => (err) ? reject(err) : resolve(filenames))
});

module.exports = readDirPr;
