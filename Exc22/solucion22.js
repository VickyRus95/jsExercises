
function profitableGamble (prob,prize, pay){
if (prob * prize > pay) { return true}
else {return false}

}

document.write (profitableGamble(0.2, 50, 9))
document.write ("<br>")
document.write (profitableGamble(0.9, 1, 2))
document.write ("<br>")
document.write (profitableGamble(0.9, 3, 2)) 








