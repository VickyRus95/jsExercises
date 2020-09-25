function removeDups (arr1){

    let dupsRemoved = [...new Set(arr1)];
    
console.log(dupsRemoved);

}

removeDups([1, 0, 1, 0]) 

removeDups(["The", "big", "cat"]) 

removeDups(["John", "Taylor", "John"])