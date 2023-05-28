// Soal:
// Hilangkan Karakter Berulang yang terdapat pada String
// Clue : menggunakan perulangan
// Tidak boleh langsung print expected output

/*
Expected Output:
[ 'A', 'B', 'C', 'D', 'F', 'G' ]
[ 'R', 'O', 'A', 'Q', 'P' ]
*/

// Jawaban:
function removeDuplicates (str) {
    //write your code here
    let outputString = [];

    for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i+1]) {
        outputString.push(str[i]);
    }
    }
    return outputString
};

console.log(removeDuplicates("AAAABBBCDFFFDAABBBCG"))
console.log(removeDuplicates("RRRRROOOAAQPPP"))