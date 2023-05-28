// Soal:
// Cek Apakah pasangan kata berikut adalah anagram atau bukan
// contoh:
// listen --- silent// true
// The Eyes ---- They See// true
// sun --- moon// false

// expected output berdasarkan soal:
// true
// true 
// false
// Tidak boleh langsung print expected output
// Note : Berikan comment penjelasan pada baris kode yang dirasa penting

// Jawaban:
// write your code here



function isAnagram(str1, str2) {
    // Menghapus semua spasi pada kedua string dan mengubahnya menjadi lowercase
    str1 = str1.replace(/\s/g, '').toLowerCase();
    str2 = str2.replace(/\s/g, '').toLowerCase();
  
    // Mengubah string menjadi array karakter, mengurutkan array, dan menggabungkannya kembali menjadi string
    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');
  
    // Membandingkan kedua string yang telah diurutkan
    return str1 === str2;
  }
  
  // Fungsi isAnagram menerima dua parameter string, yaitu str1 dan str2.
  // Pertama, semua spasi dalam kedua string dihapus menggunakan metode replace() dan ekspresi reguler /\s/g.
  // Kemudian, kedua string diubah menjadi lowercase menggunakan metode toLowerCase().
  // Selanjutnya, kedua string diubah menjadi array karakter menggunakan metode split('').
  // Array karakter tersebut diurutkan menggunakan metode sort().
  // Terakhir, array yang telah diurutkan digabungkan kembali menjadi string menggunakan metode join('').
  // Dua string yang telah diurutkan dan diubah menjadi lowercase dibandingkan menggunakan operator ===.
  // Jika kedua string sama, maka pasangan kata tersebut merupakan anagram.
  
// Pengujian dengan contoh kasus
console.log(isAnagram("listen","silent"));
console.log(isAnagram("The Eyes","They See")); 
console.log(isAnagram("sun","moon")); 
  