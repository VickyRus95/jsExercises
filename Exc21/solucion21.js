function checkEquality (num1, num2) {
 if (num1 === num2) {return true}
else {return false}
}


document.write ("Los valores son iguales? " + checkEquality (7, 7))
document.write ("<br>")
document.write ("Los valores son iguales? " + checkEquality ("7", 7))
document.write ("<br>")
document.write ("Los valores son iguales? " + checkEquality (7, 5))
