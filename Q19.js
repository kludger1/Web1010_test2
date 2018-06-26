// Build a function declaration called maxOf2 that takes in two numbers and
// returns the greater value.
function maxOf2(largerNum, smallerNum) {
    if (largerNum > smallerNum) {
      return largerNum; 
    }
    else{
      return "equal";
    }
  }
// IMPORTANT: Make sure your function returns "equal" if the two numbers are equal.
// You might want to use an if/elseif/else statement for this.
//
// Then make 3 console logs calling your maxOf2 function inside each one.
// The first console log should print 5.
// The second console log should print "equal".
// The third console log should print -3.
console.log(maxOf2 (5,2))
console.log(maxOf2 (2,2))
console.log(maxOf2 (-3,-5))


