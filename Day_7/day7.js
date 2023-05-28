// Buatlah sebuah fungsi "sum" yang mengambil sejumlah argumen dan menampilkan jumlah dari semua argumen tersebut.
function sum(...array){
    return array.reduce((total,num) => total + num,0)
};

console.log(sum(1,2,3));
console.log(sum(1,2,3,4,5));
console.log(sum(10,20,30,40,50));

// Buatlah sebuah fungsi "mergedObject" yang menerima dua argumen pertama berupa object, 
// dan argumen ketiga berupa string. Hasil yang diberikan berupa menampilkan hasil gabungan kedua 
// object argumen pertama tanpa memiliki atribut pada argumen ketiga

function mergedObject(obj1, obj2, excludeKey) {
    const merged = { ...obj1, ...obj2 };
    delete merged[excludeKey];
    return merged;
  }
const obj1 = { nama: 'Budi', umur: 26 };
const obj2 = { golonganDarah: 'A', tempatLahir: 'Bengkulu', tanggalLahir: '12 Maret 1997' };
const result = mergedObject(obj1, obj2, 'umur');
console.log(result)

// Buatlah sebuah fungsi "mergeInfiniteObjects" yang menerima sejumlah argumen berupa object yang akan menampilkan hasil gabungan seluruh object

function mergeInfiniteObjects(...objects) {
    return objects.reduce((merged, obj) => ({ ...merged, ...obj }), {});
  };
  
const obj1 = { a: 'a', b: 'b', c: 'c', d: 'd' };
const obj2 = { e: 'e', f: 'f', g: 'g', h: 'h' };
const obj3 = { i: 'i', j: 'j' };
const result = mergeInfiniteObjects(obj1, obj2, obj3);
console.log(result);


