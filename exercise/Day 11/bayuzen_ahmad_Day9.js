// Soal:
// Seorang front-end dev  diminta untuk membuat logic yang dapat merapikan sebuah random String 
// Setiap kata memiliki huruf Capital pada awal hurufnya.
// Contoh  "SeLamAT PAGi semua halOo" menjadi "Selamat Pagi Semua Haloo"
// "HaRI iNi adALAh HarI LibUR " menjadi "Hari Ini Adalah Hari Libur"
// Bantulah front-end tersebut
/* 
Expected Output:
Selamat Pagi Semua Haloo
Hari Ini Adalah Hari Libur
*/
// berikan comment penjelasan pada baris kode yang dianggap penting
// Tidak boleh langsung print expected output

// Jawaban: 

function wordFormatter(word){
    // write your code here
    // make the word to be lower case and split them by space
    let word_lower = word.toLocaleLowerCase().split(' ');

    // define result as empty array
    let result = [];

    // use looping for iterate the values in word_lower
    for(i=0; i<word_lower.length;i++){
        // make the first letter for each looping to be uppercase and join, using slice to take only character after first letter
        let word_lower_2 = word_lower[i][0].toUpperCase() + word_lower[i].slice(1,word_lower[i].length);
        // push to result
        result.push(word_lower_2)
    };
    // join
    return result.join(' ');
}

console.log(wordFormatter("SeLamAT PAGi semua halOo"));
console.log(wordFormatter("HaRI iNi adALAh HarI LibUR"));