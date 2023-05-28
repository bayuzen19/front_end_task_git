// Soal:
// berikan spasi di antara kata yang terdapat pada string berikut
//expected output : 
// Selamat Pagi Dunia
// Aku Suka Javascript

// Tidak boleh langsung print expected output
// Berikan comment penjelasan pada baris kode yang dirasa penting
// CLUE : gunakan perulangan dan pengkondisian

// Jawaban:
function manipulateString(str) {
// initiate result
    let result = '';
    // iterate string
    for(x=0;x<str.length;x++){
        // condition when indexing is uppercase we will make a space
        if(str[x]===str[x].toUpperCase() && x != 0){
            result += ' '
        }
        // combine all
        result += str[x]
    }
    return result
};

console.log(manipulateString("SelamatPagiDunia"));
console.log(manipulateString("AkuSukaJavascript"));