function tuckIn (ar1, ar2) {
let fullarray = [ar1 [0], ...ar2, ar1 [1]]
return fullarray
}


document.write (tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]))
document.write ("<br>")
document.write (tuckIn([15,150], [45, 75, 35]))
document.write ("<br>")
document.write (tuckIn([[1, 2], [5, 6]], [[3, 4]]))