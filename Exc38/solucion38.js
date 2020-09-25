function missingNum (arr) {
let count = 0;
        for (let i = 0; i < arr.length; i++) {
            count = count + 1;
            if (arr[i] != count) {
                return (count);
            }
        }
    }

document.write (missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]))
document.write ("<br>")
document.write (missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]))
document.write ("<br>")
missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9])