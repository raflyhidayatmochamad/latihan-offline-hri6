function hitungBMI() {
  const berat = parseFloat(document.getElementById("berat").value);
  const tinggiCm = parseFloat(document.getElementById("tinggi").value);
  const hasilEl = document.getElementById("hasil");

  if (isNaN(berat) || isNaN(tinggiCm) || berat <= 0 || tinggiCm <= 0) {
    hasilEl.textContent = "Masukkan berat dan tinggi yang valid!";
    hasilEl.style.color = "red";
    return;
  }

  // Konversi tinggi cm ke meter
  const tinggiM = tinggiCm / 100;

  // Hitung BMI
  const bmi = berat / (tinggiM * tinggiM);

  // Tentukan kategori BMI
  let kategori = "";
  if (bmi < 18.5) {
    kategori = "Kurus";
  } else if (bmi >= 18.5 && bmi < 25) {
    kategori = "Normal";
  } else if (bmi >= 25 && bmi < 30) {
    kategori = "Kelebihan Berat Badan";
  } else {
    kategori = "Obesitas";
  }

  hasilEl.style.color = "#222";
  hasilEl.textContent = `BMI Anda adalah ${bmi.toFixed(2)} (${kategori})`;
}