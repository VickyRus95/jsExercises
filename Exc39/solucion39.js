function isAnagram (stringA, stringB) {
    
    stringA = stringA.replace(/[^\w]/g, '').toLowerCase()
    stringB = stringB.replace(/[^\w]/g, '').toLowerCase()

    return sortString(stringA) === sortString(stringB)
}
 
function sortString(string) {
    return string.split('').sort().join('');
}
console.log (isAnagram("cristian", "Cristina"))

console.log (isAnagram("Dave Barry", "Ray Adverb"))

console.log (isAnagram("Nope", "Note"))