function isAnagram (stringa, stringB) {
    
    stringa = stringa.replace(/[^\w]/g, '').toLowerCase()
    stringB = stringB.replace(/[^\w]/g, '').toLowerCase()

    return sortString(stringa) === sortString(stringB)
}
 
function sortString(string) {
    return string.split('').sort().join('');
}
console.log (isAnagram("cristian", "Cristina"))

console.log (isAnagram("Dave Barry", "Ray Adverb"))

console.log (isAnagram("Nope", "Note"))