let numero = prompt ("Ingrese un número de 1, 2 o 3 cifras")
if (numero < 10){
    document.write ("El número es de una cifra")
}
else if (numero > 10 && numero < 100) {
    document.write ("El numero es de dos cifras")
} else if (numero >= 100 && numero < 1000){
     document.write ("El numero es de tres cifras")
} else {
    document.write ("El numero ingresado contiene mas de 3 cifras")
}