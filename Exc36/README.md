How Many Vowels?

Create a function that takes a string and returns the number (count) of vowels contained within it.

Examples

countVowels("Celebration") ➞ 5

countVowels("Palm") ➞ 1

countVowels("Prediction") ➞ 4

Notes

* a, e, i, o, u are considered vowels (not y).
* All test cases are one word and only contain letters.

//The beginning and ending / are called delimiters. They tell the interpreter where the regex begins and ends. Anything after the closing delimiter is called a "modifier," in this case g and i.

The g and i modifiers have these meanings:

g = global, match all instances of the pattern in a string, not just one
i = case-insensitive (so, for example, /a/i will match the string "a" or "A".
In the context you gave (/[^\w\s]/gi), the i is meaningless, because there are no case-specific portions of the regex.