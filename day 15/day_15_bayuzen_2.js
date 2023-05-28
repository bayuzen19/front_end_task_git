function sockMerchant(socks) {
    // inisialisasi objek untuk menyimpan jumlah kaos kaki berdasarkan warna
    const socksCount = {};
  
    // melakukan perulangan pada setiap kaos kaki dalam array socks
    for (let i = 0; i < socks.length; i++) {
      const sock = socks[i];
      // jika kaos kaki warna tersebut belum dihitung, maka inisialisasi dengan nilai 0
      if (!socksCount[sock]) {
        socksCount[sock] = 0;
      }
      // menghitung jumlah kaos kaki warna tersebut
      socksCount[sock]++;
    }
  
    let pairs = 0;
    // melakukan perulangan pada setiap warna kaos kaki yang tersedia
    for (const sock in socksCount) {
      // menghitung jumlah pasangan kaos kaki berdasarkan warna tersebut
      const sockPairs = Math.floor(socksCount[sock] / 2);
      pairs += sockPairs;
    }
  
    return pairs;
  }
  
  console.log(sockMerchant([1, 1, 3, 3, 5, 5, 5, 5])); 
  console.log(sockMerchant([1, 8, 3, 3, 5, 5, 5]));