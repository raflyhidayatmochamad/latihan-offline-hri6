// Arrow function operasi
const tambah = (a, b) => a + b;
const kurang = (a, b) => a - b;
const kali   = (a, b) => a * b;
const bagi   = (a, b) => b !== 0 ? a / b : 'Error: Pembagian dengan nol';

// Fungsi utama kalkulator
const hitung = () => {
  const angka1 = parseFloat(document.getElementById("angka1").value);
  const angka2 = parseFloat(document.getElementById("angka2").value);
  const operasi = document.getElementById("operator").value;

  let hasil;
  if (operasi === "+")      hasil = tambah(angka1, angka2);
  else if (operasi === "-") hasil = kurang(angka1, angka2);
  else if (operasi === "*") hasil = kali(angka1, angka2);
  else if (operasi === "/") hasil = bagi(angka1, angka2);
  else                      hasil = "Operasi tidak valid";

  document.getElementById("hasil").innerText = `Hasil: ${hasil}`;
};
