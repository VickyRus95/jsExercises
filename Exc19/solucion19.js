


function farmAnimals (num1, num2, num3){
    let cows= num1 * 2
    let pigs= num2 * 4
    let chickens= num3 * 4
    let resultado = cows + pigs + chickens
    return resultado
}

document.write ("En la granja hay " + farmAnimals (2, 3, 5) + " patas de animales.")
document.write ("<br>")
document.write ("En la granja hay " + farmAnimals (1, 2, 3) + " patas de animales.")
document.write ("<br>")
document.write ("En la granja hay " + farmAnimals (5, 2, 8) + " patas de animales.")
