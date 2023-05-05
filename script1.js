function convertTemp() {
  var tempInput = document.getElementById("tempInput").value;
  var unitSelect = document.getElementById("unitSelect").value;
  var convertedTemp;

  if (unitSelect === "celsius") {
    convertedTemp = (tempInput * 9) / 5 + 32;
    document.getElementById("result").innerHTML =
      convertedTemp + "°F";
  } else if (unitSelect === "fahrenheit") {
    convertedTemp = ((tempInput - 32) * 5) / 9;
    document.getElementById("result").innerHTML =
      convertedTemp + "°C";
  } else {
    alert("Invalid input");
  }
}
