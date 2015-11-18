/*
Step 1:  Create a simple String calculator with a method int Add(string numbers)

  The method can take 0, 1 or 2 numbers, and will return their sum (for an empty string it will return 0) for example “” or “1” or “1,2”
  Start with the simplest test case of an empty string and move to 1 and two numbers

* Remember to solve things as simply as possible so that you force yourself to write tests you did not think about
*Remember to refactor after each passing test

Step 2: Allow the Add method to handle an unknown amount of numbers

Step 3: Allow the Add method to handle new lines between numbers (instead of commas).
  the following input is ok:  “1\n2,3”  (will equal 6)
  the following input is NOT ok:  “1,\n” (do not need to validate input - just clarifying case)
*/
var assert = require('assert');
var stringCalc = require('../stringCalc.js');

describe('Calculator', function(){
  it('Should write 0 with an empty string.', function(){
    assert.equal(0, stringCalc.calc(''));
  });
  check(1, '1');
  check(3, '1,2');
  check(15, '1,2\n3,4,5');
  check(6, '1\n2,3');
  check(6, '1,2,3');
  function check(expect, arg){
    it('Should write ' + expect + ' with an input of "' + arg.replace(/\n/g, "\\n") + '".', function(){
      assert.equal(expect, stringCalc.calc(arg));
    });
  }
});
