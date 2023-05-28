// Soal:
// Terdapat suatu kumpulan string yang yang susunan kalimat nya terbalik
// Tugas teman teman adalah mengubah kalimat tersebut menjadi kalimat yang benar

// "drow olleh"  menjadi "Hello word."
// "eko atad" menjadi menjadi "Data oke."
// "gnitset tinu" menjadi "Unit testing."

// Tidak boleh langsung print expected output

// Expected Output:

// Hello word. true
// Data oke. true
// Unit testing. true

// NOTE : Berikan comment penjelasan pada baris kdoe yang menurut anda penting
// gunakan perulangan/kode lain dan array untuk menampung kata


// Jawaban:
function unitTest(input, output) {
    console.log(output ,input === output)
 }
 
 
 function reverse(str) {
// write your code here 
    let result = str.split("").reverse().join("");
    const str2 = result.charAt(0).toUpperCase() + result.slice(1);
    return str2 +"."
 }
 
console.log(reverse("drow olleh"));
 
 
 unitTest(reverse("drow olleh"), "Hello word.")
 unitTest(reverse("eko atad"), "Data oke.")
 unitTest(reverse("gnitset tinu"), "Unit testing.");

