
let numero1 = prompt ("Ingrese el primer numero")

numero1= parseInt (numero1)

let numero2 = prompt ("Ingrese el segundo numero")

numero2= parseInt (numero2)

function sumaNumeros (valor1, valor2){
    let solucion= valor1 + valor2
    return solucion
}

document.write ("La suma de los valores es: " + sumaNumeros (numero1, numero2))




