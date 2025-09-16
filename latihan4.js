const prompt = require("prompt-sync")();

const luasLingkaran = (jariJari) => 3.14 * jariJari * jariJari;

const jariJari = parseFloat(prompt("Masukkan jari-jari: "));

console.log(`Luas lingkaran adalah: ${luasLingkaran(jariJari)}`);


//versi tanpa arrow function
// const prompt = require("prompt-sync")();

// function luasLingkaran(jariJari) {
//     return 3.14 * jariJari * jariJari;
// }

// const jariJari = parseFloat(prompt("Masukkan jari-jari: "));

// console.log(`Luas lingkaran adalah: ${luasLingkaran(jariJari)}`);
