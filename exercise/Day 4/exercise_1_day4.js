// Soal :

//  pada suat kelas, seorang guru meminta para siswa untuk melakukan hal sebagai berikut :
// guru akan menghitung nilai dari angka 1 sampai 15
// setiap bilangan yang habis di bagi 3 maka siswa secara bersama akan menyebut kata "Hip"
// setiap bilangan yang habis di bagi 5 maka siswa secara bersama akan menyebut kata "Hura"
// setiap bilangan yang habis di bagi 3 dan 5 maka siswa secara bersama akan menyebut kata "HipHura"
// setiap bilangan yang tidak memenuhi kondisi sebelumnya maka siswa secara bersamaan akan menyebutkan angka itu sendiri


// make function hihura

function hipHura(x){
    if (x%15==0){
        return "Hip Hura"
    } else if (x%5==0){
        return "Hura"
    } else if (x%3==0){
        return "Hip"
    }
    else {
        return x
    }
};

for (let i = 1; i <= 20; i++) {
  console.log(hipHura(i));
}
console.log("done");