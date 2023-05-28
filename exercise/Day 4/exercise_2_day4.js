// mencari max dan min pada array berikut

const array = [31, 9, 54, 11, 43, 6, 67]
function maxMin(array) {
    // write your code here
    //inisiasi untuk mencari max, max = -Infinity,inisiasi untuk mencari min, min = Infinity
    let max = -Infinity;
    let min = Infinity;
    for (i=0;i<array.length;i++){
        //ketika array ke -i besar dari max, maka maxnya akan menjadi array itu
        if(array[i]>max){
            max=array[i]
        }
    }
    for(i=0;i<array.length;i++){
        //ketika array ke -i kecil dari min, maka minnya akan menjadi array itu
        if(min>array[i]){
            min = array[i]
        }
    }
    //untuk menghindari undefined
    return {"max" : max, "min" : min};
};
console.log(maxMin(array));