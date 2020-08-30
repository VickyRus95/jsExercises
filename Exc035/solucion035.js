let num1 = prompt ("Ingrese el primer número")
let num2 = prompt ("Ingrese el segundo número")
let num3 = prompt ("Ingrese el tercer número")
num1 = parseInt (num1)
num2 = parseInt (num2)
num3 = parseInt (num3)
if (num1=== num2 && num1===num3){
    document.write ((num1 + num2) * num3)
} else {
    document.write ("Los números no son iguales")
}