// Fungsi konversi
const cToReamur   = c => c * 4/5;
const cToKelvin   = c => c + 273.15;
const cToFahrenheit = c => (c * 9/5) + 32;

const konversiSuhu = () => {
  const celsius = parseFloat(document.getElementById("celsius").value);
  const hasilDiv = document.getElementById("hasil");

  if (isNaN(celsius)) {
    hasilDiv.innerHTML = "<span class='error'>Masukkan angka yang valid!</span>";
    return;
  }

  const reamur = cToReamur(celsius).toFixed(2);
  const kelvin = cToKelvin(celsius).toFixed(2);
  const fahrenheit = cToFahrenheit(celsius).toFixed(2);

  hasilDiv.innerHTML = `
    <p>Reamur: <strong>${reamur} °Re</strong></p>
    <p>Kelvin: <strong>${kelvin} K</strong></p>
    <p>Fahrenheit: <strong>${fahrenheit} °F</strong></p>
  `;
};
