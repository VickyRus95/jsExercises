function charCount (str1, str2){
    let count = 0;
  for(var i = 0; i < str2.length; i++){
    if(str2.charAt(i) === str1)
      count++;
  }
 console.log (count)
}
charCount("a", "edabit") 

charCount("c", "Chamber of secrets") 

charCount("b", "big fat bubble") 