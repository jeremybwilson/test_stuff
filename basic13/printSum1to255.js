function printSum1to255(){
  var sum = 0;
  for(var i = 0; i < 256; i++){
    // return sum + i;
    sum += i;
  }
  return sum;
};
// printSum1to255();
console.log(printSum1to255());