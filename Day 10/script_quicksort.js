function countingSort(arr) {
    // Cari nilai maksimum pada array untuk menentukan ukuran array count
    const maxVal = Math.max(...arr);
  
    // Inisialisasi array count dengan nilai 0
    const count = new Array(maxVal + 1).fill(0);
  
    // Hitung jumlah kemunculan setiap elemen pada array
    for (let i = 0; i < arr.length; i++) {
      count[arr[i]]++;
    }
  
    // Akumulasikan jumlah kemunculan pada setiap elemen pada array
    for (let i = 1; i < count.length; i++) {
      count[i] += count[i - 1];
    }
  
    // Sort array dengan memanfaatkan informasi jumlah kemunculan pada setiap elemen
    const output = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
      output[count[arr[i]] - 1] = arr[i];
      count[arr[i]]--;
    }
  
    // Return array yang sudah diurutkan
    return output;
  }
  
  // Contoh penggunaan
  const arr = [4, 2, 10, 5, 8, 7, 6, 1, 3, 9];
  const sortedArr = countingSort(arr);
  console.log(sortedArr); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  