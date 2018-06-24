const fetch = require("node-fetch");

function readInTextFile(){
  fetch('http://localhost:4000/code_exercises/sample-input.txt')
    .then(response => response.text())
    // .then(text => console.log('Here are the results: ' + '\n' + text))
    .then(text => console.log(text))
    .catch(failureCallback)
}

function parseTextFile(){

  // console.log(array[0]);
  // console.log(array[1]);

  // iterate through sample-input.txt values
  // for(var i = 0; i < array.length; i++){
  //   scores.array.push(i);
  // }
  // determine wins

  // determine losses

  // determine draws

  // add up team scores
}


function parseTextFileIntoArray(text){
  let scores_by_line = text.split("\n");
  // let scores_by_line = scores.split("\n");
  // console.log(scores_by_line);
}
function successCallback(result) {
  console.log("It succeeded with " + result);
}

function failureCallback(error) {
  console.log("It failed with " + error);
}
readInTextFile();

// parseTextFile();

// parseTextFileIntoArray();