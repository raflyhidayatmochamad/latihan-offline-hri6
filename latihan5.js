// Jalankan dengan: node kalkulator.js
const prompt = require("prompt-sync")();

// arrow function calculator
const hitung = (a, b, operasi) => {
    switch (operasi) {
        case 'tambah':
            return a + b;
        case 'kurang':
            return a - b;
        case 'kali':
            return a * b;
        case 'bagi':
            return a / b;
        default:
            return null;
    }
};

const angka1 = parseFloat(prompt("Masukkan angka pertama: "));
const angka2 = parseFloat(prompt("Masukkan angka kedua: "));
const operasi = prompt("Pilih operasi (tambah, kurang, kali, bagi): ").toLowerCase();
const hasil = hitung(angka1, angka2, operasi);

if (hasil !== null && !isNaN(hasil)) {
    console.log(`Hasil ${operasi} dari ${angka1} dan ${angka2} adalah: ${hasil}`);
} else {
    console.log("Operasi tidak valid");
}