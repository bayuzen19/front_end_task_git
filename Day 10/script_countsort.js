function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  const pivot = arr[0];
  const leftArr = [];
  const rightArr = [];
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

const unsortedArr = [3, 7, 2, 1, 6, 5, 8, 4];
const sortedArr = quickSort(unsortedArr);
console.log(sortedArr); 