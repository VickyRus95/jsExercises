let contador1 = 0;
let contador2 = 0;
let total = 0;
let x = 0;
  while (x < 5) {
   let sueldos = prompt ("Ingrese el sueldo");
    sueldos = parseInt (sueldos);
    if (sueldos <= 300) {
      contador1 = contador1 + 1;
    } else {
      contador2 = contador2 + 1;
    }
    total = total + sueldos;
    x = x + 1;
  }
  document.write("Cantidad de empleados que cobran 300 o menos:" + contador1);
  document.write("<br>");
  document.write("Cantidad de empleados que cobran más de 300:" + contador2);
  document.write("<br>");
  document.write("Gastos en sueldos en la empresa:" + total);