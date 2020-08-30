num1= prompt ("Ingrese un numero")
num2= prompt ("Ingrese un numero")
num3= prompt ("Ingrese un numero")
num1= parseInt (num1)
num2= parseInt (num2)
num3= parseInt (num3)
if (num1>num2 && num1>num3){
    document.write ("El numero " + num1 + " es el mayor.")
} else if (num2> num3){
    document.write ("El numero " + num2 + " es el mayor.")
} else {
    document.write ("El numero " + num3 + " es el mayor.")
}