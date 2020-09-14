
function timeForMilkAndCookies (date) {
let fecha = date.getDate()
let mes = date.getMonth ()
if (fecha === 24 && mes === 11) {
document.write ("It is time for milk and cookies!!!" + "<br>")
}
}
timeForMilkAndCookies(new Date(2013, 11, 24))

timeForMilkAndCookies(new Date(2013, 0, 23)) 

timeForMilkAndCookies(new Date(3000, 11, 24))