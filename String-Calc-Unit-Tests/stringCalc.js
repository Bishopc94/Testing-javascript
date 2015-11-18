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

var add = {
  calc : function(x){
    var num = 0;
    if(x){
      for(var i=0; i < this.args(x).length; i++){
        num += parseInt(this.args(x)[i]);
      }
      return num;
    }else {
      return num;
    }
  },
  args : function(x){
    return x.split(/,|\n/g);
  }
};

module.exports = add;
