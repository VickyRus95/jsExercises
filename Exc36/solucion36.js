function countVowels (string) {
        return string.match(/[aeiou]/gi).length;
    }

console.log (countVowels("Celebration"))

console.log (countVowels ("Palm"))

console.log (countVowels("Prediction")) 