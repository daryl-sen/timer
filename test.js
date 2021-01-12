let i = 0;
let inter = setInterval(function() {
  console.log('1');
  i++;
  if (i > 5) {
    clearInterval(inter);
  }
}, 500);