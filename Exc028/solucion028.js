let num1= prompt ("Ingrese un numero")
let num2= prompt ("Ingrese un numero")
num1 = parseInt(num1)
num2 = parseInt(num2)
if (num1>num2) {
    let suma= num1 + num2 
    let resta= num1 - num2
    console.log ("La suma da: "+ suma + " y la resta da: "+ resta)
} else {
    let multiplicacion= num1 * num2
    let division= num1 / num2
    console.log ("La multiplicacion da:" + multiplicacion + "y la division da: "+ division)
}
