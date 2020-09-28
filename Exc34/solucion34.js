function getOnlyEvens(arr) {
let allEven = []
for (allEven = arr[0]; allEven < arr.length ; allEven++) {
if(allEven % 2 == 0) {
console.log (allEven) 
}
}  
}

getOnlyEvens([1, 3, 2, 6, 4, 8]) 
console.log ("<br>")
getOnlyEvens([0, 1, 2, 3, 4]) 
console.log ("<br>")
getOnlyEvens([1, 2, 3, 4, 5])