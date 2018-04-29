function printMinMaxAverage(array){  // given and arrray, print the min, max, and average values
  var min = array[0];
  var max = array[0];
  var sum = array[0];
  for(var i = 0; i < array.length; i++){
    if(array[i] > max){ // if the array index is greater than the max value, assign max value to the index
      max = array[i];
    }
    if(array[i] < min){  // if the array index is less than the min value, assign the min value to the index
      min = array[i];
    }
    sum += i;
  }
  console.log("Min value is: " + min);
  console.log("Max value is: " + max);

  var average = sum / array.length;
  console.log("Average value is: " + average);
  var array_new = [min, max, average];
  return array_new;
};
var array_vals = [1, 3, 4, 5, 7, 10, 12, 20];
// printMinMaxAverage(array_vals);
console.log(printMinMaxAverage(array_vals));