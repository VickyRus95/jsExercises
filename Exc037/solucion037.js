let palabra = prompt ("Ingrese alguna de estas palabras: casa, perro, mesa, gato")
switch (palabra){
    case "gato" : console.log ("CAT");
        break;
    case "perro" : console.log ("DOG");
        break;
    case "mesa" : console.log ("TABLE");
        break;
    case "casa" : console.log ("HOUSE");
        break;
    default: document.write ("Ingrese una de las cuatro palabras sugeridas")
}

