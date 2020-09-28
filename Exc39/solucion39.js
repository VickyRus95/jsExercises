function isAnagram (str1, str2) {
str1 = str1.replace(/[^\w]/g, '').toLowerCase()
str2 = str2.replace(/[^\w]/g, '').toLowerCase()
return sortString(str1) === sortString(str2)
}
function sortString(string) {
    return string
    .split('')
    .sort()
    .join('');
}
console.log (isAnagram("cristian", "Cristina"))

console.log (isAnagram("Dave Barry", "Ray Adverb"))

console.log (isAnagram("Nope", "Note"))