let altura = prompt ("Ingrese la altura en centimetros, ej: 152")
let altura2 = prompt ("Ingrese la altura en centimetros, ej: 152")
let altura3 = prompt ("Ingrese la altura en centimetros, ej: 152")
altura = parseInt (altura)
altura2 = parseInt (altura)
altura3 = parseInt (altura)
function calcularAlturas (){
let totalAlturas= (altura +  altura2 + altura3) / 3
document.write ("El promedio de altura es: " + totalAlturas)
}
calcularAlturas ()

/* OTRA FORMA DE RESOLVERLO
var x=0;
var suma=0;
while (x<5)
{
  var altura;
  altura=prompt('Ingrese la altura en centímetros(Ej. 175)','');
  altura=parseInt(altura);
  suma=suma+altura;
  x=x+1;
}
var promedio=suma/5;
document.write('La altura promedio de las cinco personas es:'+promedio); */