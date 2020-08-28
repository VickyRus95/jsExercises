
function matchHouses (step) {
  if (step===0) {return step}
  else {return (step * 4) + (step + 1)} 
    
}

document.write (matchHouses(0))
document.write ("<br>")
document.write (matchHouses(1))
document.write ("<br>")
document.write (matchHouses(4))
document.write ("<br>")
document.write (matchHouses(87))
document.write ("<br>")
document.write (matchHouses(36))
