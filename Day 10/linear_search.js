function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === val) return i;
    }
    return -1;
  }
  
  const arr = [1, 3, 5, 7, 9];
  console.log(linearSearch(arr, 5)); // Output: 2
  console.log(linearSearch(arr, 8)); // Output: -1
  