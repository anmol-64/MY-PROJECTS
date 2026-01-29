const textBox = document.getElementById("textBox");
const toFahrenite = document.getElementById("toFahrenite");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert() {
  if (toFahrenite.checked) {
    temp = Number(textBox.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = temp + "°F";
  } else if (toCelsius.checked) {
    temp = Number(textBox.value);
    temp = ((temp - 32) / 9) * 5;
    result.textContent = temp + "°C";
  } else {
    result.textContent = "Select a unit";
  }
}
