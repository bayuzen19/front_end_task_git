// Soal:
// Count The Vowels
//hitung jumlah huruf vokal pada string
// expected output : 
// 9
// 6

// Tidak boleh langsung print expected output
// Berikan comment penjelasan pada baris kode yang dirasa penting
// CLUE : Gunakan perulangan dan pengkondisian


let vowels = ['a','i','u','e','o'] // vokal
// Jawaban:
function countVowels (str, vowels) {
// write your code here
let count = 0;
// make string to lower case
str = str.toLowerCase();
// loop through all the str
for(i=0;i<str.length;i++){
    // check if the current char is a vowel
    if(vowels.includes(str[i])){
        // increase count
        count += 1
    }
}
return count
};

console.log(countVowels("Selamat Pagi Duniaa!!", vowels))
console.log(countVowels("aku suka ngoding", vowels))