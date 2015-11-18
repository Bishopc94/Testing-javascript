/*
*   Write a program that prints the numbers from 1 to 100.
*   But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. 
*   For numbers which are multiples of both three and five print “FizzBuzz”.
*   Use % === 0
*/
function FizzBuzz(num){
  if(isGreaterThanOne(num)){
    if(isFizzBuzz(num)){
      return 'Fizz Buzz';
    }else if(isFizz(num)){
      return 'Fizz';
    }else if(isBuzz(num)){
      return 'Buzz';
    }else {
      return num;
    }
  }else {
    return false;
  }
}
function isGreaterThanOne(num){
  if(num >= 1){
    return true;
  }
}
function isFizz(num){
  return num % 3 == 0;
}
function isBuzz(num){
  return num % 5 == 0;
}
function isFizzBuzz(num){
  return num % 15 == 0;
}
(function Print(){
  for(var i = 0; i <= 100; i++){
    if(isGreaterThanOne(i)){
      console.log(FizzBuzz(i));
    }
  }
})();
module.exports = FizzBuzz;
