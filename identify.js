const im = require('imagemagick');

const identify = (format) => (file) => new Promise((resolve, reject) => {
    im.identify(['-format', format, file], function(err, output){
      if (err) reject(err);
      resolve(output);
      // dimension: 3904x2622
    });
  });

module.exports = identify;
