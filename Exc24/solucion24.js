
function matchHouses (step) {
  let result= (step * 4) + (step + 1)
    if (step===0){return 0}
  else {return result} 
    
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
