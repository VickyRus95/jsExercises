function countVowels (str1) {
        return str1.match(/[aeiou]/gi).length;
    }

console.log (countVowels("Celebration"))

console.log (countVowels ("Palm"))

console.log (countVowels("Prediction")) 