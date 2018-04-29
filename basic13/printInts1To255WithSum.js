function printInts1To255WithSum(){
  var array = [0];
  var sum = 0;
  for(var i = 1; i < 256; i++){
    array.push(i);  // push each new value of the array
    sum += i;  // add the next value of the array to the sum
    console.log(array[i] + ", the sum so far is: " + sum);
  }
};
// printInts1To255WithSum();
console.log(printInts1To255WithSum());