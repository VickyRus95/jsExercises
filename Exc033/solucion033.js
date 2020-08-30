let nombrePostulante= prompt ("Ingrese el nombre del postulante")
let cantPreguntasHechas= prompt ("Ingrese la cantidad de preguntas hechas")
let cantPreguntasCorrectas= prompt ("Ingrese la cantidad de preguntas contestadas correctamente")
let porcentaje= (cantPreguntasCorrectas * 100) / cantPreguntasHechas
function nivelPostulante (){
if (porcentaje >= 90) {
    document.write ("NIVEL SUPERIOR")
} else if (porcentaje >= 75 && porcentaje < 90){
    document.write ("NIVEL MEDIO")
} else if (porcentaje >= 50 && porcentaje < 75){
    document.write ("NIVEL REGULAR")
} else {document.write ("FUERA DE NIVEL")}

}
 
nivelPostulante ()


