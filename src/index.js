
exports.min = function min (arr) {
  return arr==undefined || arr.length == 0 ? 0 : arr.sort((a,b)=>a-b)[0];
}

exports.max = function max (arr) {
  return arr==undefined || arr.length == 0 ? 0 : arr.sort((a,b)=>a-b).reverse()[0];
}

exports.avg = function avg (arr) {
  return arr==undefined || arr.length == 0 ? 0 : arr.reduce((a,b) => a+b,0) / arr.length;
}
