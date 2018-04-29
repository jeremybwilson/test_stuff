function SecretCode(){
  const secretNum = 78;

  this.guessNum = function(number){
    if(number > 78){
      return "Lower";
    } else if (number < 78) {
      return "Higher";
    } else {
      return "You guessed it";
    }
  }
}
let secret = new SecretCode();
// console.log("Value of secretNum : " + secret.secretNum);
console.log("Value of secretNum : " + secret.guessNum(78));

SecretCode.prototype.getSecret = function(){
  return this.secretNum;
}
console.log("The secret number is " + secret.getSecret());