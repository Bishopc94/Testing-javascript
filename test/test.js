var assert = require('assert');
var Fizz = require('../fizzBuzz.js').fizz;
describe('FizzBuzz', function() {
  it('should print 3 for all numbers divisible by 3', function(){
    assert.equal(0, Fizz.fizz());
  });
  // Print Fizz for numbers Divisible by 3
  // Print Buzz for numbers Divisible by 5
  // Print FizzBuzz for numbers Divisible by 3 and 5
});
