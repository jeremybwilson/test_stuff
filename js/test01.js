
String.prototype.toJadenCase = function () { 
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}

var str = ("How can mirrors be real if our eyes aren't real").toJadenCase();
// console.log(str);

function highAndLow(numbers){
  // ...
  var numbers = numbers.split(" ");
  // console.log(numbers);
  var max = Math.max.apply(null, numbers);
  var min = Math.min.apply(null, numbers);
  return max + " " + min
  // console.log(max + " " + min);
}
// console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));
// console.log(highAndLow("1 -1"));
// console.log(highAndLow("1 1"));


function highAndLowBestPractice(numbers){
  // ...
  numbers = numbers.split(' ').map(Number);
  var max = Math.max.apply(0, numbers);
  var min = Math.min.apply(0, numbers);
  return max + ' ' + min;
}
// console.log(highAndLowBestPractice("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));
// console.log(highAndLowBestPractice("1 -1"));
// console.log(highAndLowBestPractice("1 1"));

function songDecoder(song){
  return song.replace(/(DOG)+/g," ").trim()
}
// console.log(songDecoder("ADOGBDOGC"));
// console.log(songDecoder("ADOGDOGDOGBDOGDOGDOGC"));
// console.log(songDecoder("DOGADOGBDOGCDOG"));

const songDecoder2 = song => song.replace(/(WUB)+/g,' ').trim();
// console.log(songDecoder2("AWUBBWUBC"));
// console.log(songDecoder2("AWUBWUBWUBBWUBWUBWUBC"));
// console.log(songDecoder2("WUBAWUBBWUBCWUB"));

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
console.log(disemvowel("This website sucks, what a bunch of losers!"));

disemvowel2 = str => str.replace(/[aeiou]/gi,'');
console.log(disemvowel2("This website sucks, what a bunch of losers!"));

