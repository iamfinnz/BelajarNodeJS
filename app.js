// const fs = require("fs");

// fs.copyFileSync("teks.txt", "teks2.txt");
// console.log("teks.txt berhasil dicopy ke teks2.txt")


// const hero = require('superheroes');

// for(let i=0; i<10; i++){
//     console.log(hero.random());
// }

const op = require("./module");

const moduleTitle = op.title;
const moduleTambah = op.tambah(10, 5);
const modulePerkalian = op.kali(10, 5);

console.log(moduleTitle)
console.log(moduleTambah)
console.log(modulePerkalian)