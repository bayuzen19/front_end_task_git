// Soal: Hitunglah jumlah masing masing karakter yang terdapat pada kata berikut
// karakter yang berupa huruf kapital maupun huruf kecil dihitung sama
// Contoh:
// Dibimbing di| karakter  contoh  d:2, i: 4 dst..... 
// Software  | karakter  contoh   s:1, e: 1 dst.....
// Frontend  | karakter  contoh  f:1, r: 1 dst.....

// Expected Output:
// { d: 2, i: 4, b: 2, m: 1, n: 1, g: 1, ' ': 1 }
// { s: 1, o: 1, f: 1, t: 1, w: 1, a: 1, r: 1, e: 1 }
// { f: 1, r: 1, o: 1, n: 2, t: 1, e: 1, d: 1 }

// Tidak boleh langsung print expected output
// NOTE : Berikan comment penjelasan pada baris kode yang dirasa penting
// Gunakan Object/Array dan juga perulangan
// Jawaban:

function charCount(word) {
    // Deklarasi variabel charCount sebagai object untuk menyimpan hasil perhitungan karakter
    let charCount = {}; 
    // Lakukan perulangan untuk setiap karakter pada input word
    for (let i = 0; i < word.length; i++) { 
         // Simpan karakter ke dalam variabel char dan ubah menjadi lowercase
      let char = word[i].toLowerCase();
      // Jika karakter sudah pernah muncul sebelumnya pada variabel charCount
      if (charCount[char]) { 
        charCount[char]++; // Tambahkan jumlah kemunculan karakter tersebut pada variabel charCount
      } else {
        charCount[char] = 1; // Jika karakter belum pernah muncul sebelumnya pada variabel charCount, inisialisasi jumlah kemunculan dengan 1
      }
    }
    return charCount; // Kembalikan variabel charCount yang berisi hasil perhitungan jumlah kemunculan karakter
  }
  
  console.log(charCount("Dibimbing di"));
  console.log(charCount("Software")); 
  console.log(charCount("Frontend")); 