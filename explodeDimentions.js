const explodeDimentions = (dimentions) => new Promise( (resolve, reject) => {
  if (dimentions && typeof dimentions === 'string') {
    if(/^\d*[x]\d*$/.test(dimentions)) {
      const dimentionsObject = dimentions.match(/(^\d*)[x](\d*$)/)
      resolve({
        width: dimentionsObject[1],
        height: dimentionsObject[2]
      });
    }
    else {
      resolve({width:0, height:0})
    }
  }
  reject('not dimentions')
});
module.exports = explodeDimentions;
