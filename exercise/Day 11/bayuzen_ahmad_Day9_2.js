// Soal: 
// Seorang Coder diminta untuk mensolve suatu baris deret bilangan  
// deret bilangan tersebut adalah 0,1,1,2,3,5,8,13,21,......
// dari pola yang ada buatlah fungsi yang dapat menampilkan deret bilangan hingga 20 bilangan
// clue: menggunakan perulangan

/*
Expected Output
0
1
1
2
3
5
8
13
21
34
55
89
144
233
377
610
987
1597
2584
4181
6765
*/

// Tidak boleh langsung print expected output
// berikan comment penjelasan pada baris kode yang dianggap penting

// Jawaban:

function fibonacci(n){
    // write your code here
    // define first and second terms
    const fib = [0,1]

    // iterate, 
    for(i=2; i<n+1;i++){
        fib[i] = fib[i-1] + fib[i-2]
    };
    return fib
};

console.log(fibonacci(20));