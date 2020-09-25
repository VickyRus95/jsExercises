function removeDups (arr){

    let dupsRemoved = [...new Set(arr)];
    
console.log(dupsRemoved);

}

removeDups([1, 0, 1, 0]) 

removeDups(["The", "big", "cat"]) 

removeDups(["John", "Taylor", "John"])