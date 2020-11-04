/*A repdigit is a positive number composed out of the same digit. 
Create a function that takes an integer 
and returns whether it's a repdigit or not.
isRepdigit(66) ➞ true
isRepdigit(0) ➞ true
isRepdigit(-11) ➞ false
Notes
The number 0 should return true (even though it's not a positive number).*/

  function isRepdigit (number) {
    var result = number.toString().split("")
	if (result[0] === result[1])return true;
	return false;  
  }
console.log(isRepdigit(66))
console.log(isRepdigit(0))
console.log(isRepdigit(-11)) 