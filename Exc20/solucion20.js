function convertIntoSeconds (num1, num2){
 
let seconds= (num1 * 3600) + (num2 * 60)
return seconds
}

document.write ("El total de segundos es: " + convertIntoSeconds (1,3))
document.write ("<br>")
document.write ("El total de segundos es: " + convertIntoSeconds (2,0))
document.write ("<br")
