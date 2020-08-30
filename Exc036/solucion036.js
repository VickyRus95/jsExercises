let num1 = prompt ("Ingrese el primer número")
let num2 = prompt ("Ingrese el segundo número")
let num3 = prompt ("Ingrese el tercer número")
num1 = parseInt (num1)
num2 = parseInt (num2)
num3 = parseInt (num3)
if (num1 < 10 && num2 < 10 && num3 < 10){
    document.write ("Los numeros ingresados son menores que 10")
} else{
    document.write ("Alguno de los números ingresados no son menores que 10")
}