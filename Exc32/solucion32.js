function sortByLength (array) {
  let finalOrder =  array.sort(function(a, b){
      return a.length - b.length
    })
    return finalOrder
}

console.log(sortByLength([" a", " cccc ", " dd", " bbb"]))
console.log(sortByLength([" apple", " pie", " shortcake"]))
console.log(sortByLength([" may", " april", " september", " august"]))
console.log(sortByLength([]))
