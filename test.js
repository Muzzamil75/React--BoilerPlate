var ax = (function range(num = 13, x = 12, y = 14) {
  if (num === 4000) return true;
  if (x - y > 0) {
    if (num < x && num > y) return console.log('I range');
    else return console.log('not in range')
  }
  else if (x - y < 0) {
    if (num < y && num > x)
      return console.log('In range');
    else return console.log('nott in range')
  }
})()
console.log(ax)