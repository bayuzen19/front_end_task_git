function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let current = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = current;
    }
    return arr;
  }
  
  let arr = [3, 2, 1, 5, 4];
  console.log("Unsorted array: " + arr); // [3, 2, 1, 5, 4]
  arr = insertionSort(arr);
  console.log("Sorted array: " + arr); // [1, 2, 3, 4, 5]
  