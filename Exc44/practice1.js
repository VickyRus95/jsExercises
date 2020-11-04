/*
You can test for empty string like this:

"".length === 0 ➞ true
Use a regular expression to test for an empty string.

const REGEXP = /your solution/
REGEXP.test("") ➞ true*/
function REGEXP (str) {
if (str.length === 0) {return true}
else {console.log ("It's not an empty string")
}
}
console.log (REGEXP("Victoria Rus"))
console.log (REGEXP(""))
console.log (REGEXP("Victoria Rus"))



