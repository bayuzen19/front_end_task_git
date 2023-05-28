function testCase(i, o){
    if(i === o) return `Test Pass: output is ${o} as expected`
    return `Test Failed: ${i} not equall to ${o}` 
  };

function sortStart(arr) {
    // Mengurutkan value dalam array dan mengubah setiap string dalam array menjadi array karakter
  const charArrays = arr.sort().map(str => str.split(''));

  // Menggabungkan setiap karakter dalam array dengan menambahkan "***" di antara setiap karakter
  const mergedArrays = charArrays.map(charArray => charArray.join('***'));

  // Mengembalikan nilai pertama dari array yang sudah digabungkan
  return mergedArrays[0];
};
  
  // Fungsi sortStart menerima array yang berisi string. Pertama, setiap string dalam array tersebut diubah menjadi array karakter.
  // Kemudian, array tersebut diurutkan secara leksikografis berdasarkan karakter ASCII values.
  // Setelah itu, setiap karakter digabungkan kembali dengan menambahkan "***" di antara setiap karakter.
  // Hasil akhirnya adalah string yang berisi karakter yang diurutkan dan dipisahkan oleh "***".
  
// Pengujian dengan contoh kasus
console.log(testCase(sortStart(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n'));
console.log(testCase(sortStart(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e'));



  
