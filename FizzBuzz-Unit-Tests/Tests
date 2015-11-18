/*
*   Should return the following only if the number is larger than 0.
*   Should return Fizz for numbers divisible by 3.
*   Should return Buzz for numbers divisible by 5.
*   Should return FizzBuzz for numbers divisible by 3 and 5.
*   Should return the number for numbers not divisible. 
*/
var assert = require('assert');
var FizzBuzzGame = require('../fizzBuzz.js');
describe('FizzBuzz', function() {
  it('Should print Fizz for all numbers divisible by 3', function(){
    assert.equal('Fizz', FizzBuzzGame(3));
  });
  it('Should print Buzz for all numbers divisible by 5', function(){
    assert.equal('Buzz', FizzBuzzGame(5));
  });
  it('Should print Fizz Buzz for all numbers divisible by 3 and 5', function(){
    assert.equal('Fizz Buzz', FizzBuzzGame(15));
  });
  it('Should return the number for numbers not divisible.', function(){
    assert.equal(7, FizzBuzzGame(7));
  });
  it('Should return false for all numbers that are less than 1', function(){
    assert.equal(false, FizzBuzzGame(0));
  });
});
