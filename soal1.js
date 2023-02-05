const prompt = require('prompt-sync')({sigint: true});

const number = prompt("Masukkan angka: ");

if (!isNaN(number) && number >= 0) {
 
  if (number % 2 === 0) {
    console.log(`akar pangkat dari ${number} adalah ` + Math.sqrt(number)); 
  } else {
    console.log("Tidak bisa input bilangan ganjil"); 
  }
} else { // jika inputan salah
  console.log("Tidak Boleh Input Angka Minus/Huruf");
}