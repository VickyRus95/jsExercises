var x = 0;
var cantidad1 = 0;
var cantidad2 = 0;
while (x < 10)
{
  var notaAlumno;
  notaAlumno =  prompt("Ingrese nota del alumno ");
  if (notaAlumno >= 7) {
    cantidad1 = cantidad1 + 1;
  } else {
    cantidad2 = cantidad2 + 1;
  }
  x=x+1;
}
document.write("Cantidad de alumnos con notas mayores o iguales a 7:" + cantidad1);
document.write("<br>");
document.write("Cantidad de alumnos con notas menores a 7:" + cantidad2);