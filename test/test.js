<<<<<<< HEAD
var assert = require("assert")
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
})
=======
var assert = require('assert');
var Fizz = require('../fizzBuzz.js').fizz;
describe('FizzBuzz', function() {
  it('should print 3 for all numbers divisible by 3', function(){
    assert.equal(0, Fizz.fizz);
  });
  // Print Fizz for numbers Divisible by 3
  // Print Buzz for numbers Divisible by 5
  // Print FizzBuzz for numbers Divisible by 3 and 5
});
>>>>>>> 423c43380c1100647be334822d96f38543b814b9
