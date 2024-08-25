//input values
function calculate() {
  const ageValue = parseInt(document.querySelector("#age").value);
  const heightFeet = parseInt(document.getElementById("height1").value);
  const heightInches = parseInt(document.getElementById("height2").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const gender = document.getElementById("gender");

  //display
  const display = document.querySelector(".result");

  if (
    isNaN(ageValue) ||
    isNaN(heightFeet) ||
    isNaN(heightInches) ||
    isNaN(weight)
  ) {
    alert("Enter a valid number");
  } else {
    const BMI =
      weight /
      ((heightFeet * 0.3048 + heightInches * 0.0254) *
        (heightFeet * 0.3048 + heightInches * 0.0254));

    let category = "";
    if (gender && ageValue && heightFeet && heightInches && weight) {
      if (BMI < 18.5) {
        category = "Under Weight";
      } else if (BMI >= 18.5 && BMI <= 24.99) {
        category = "Normal Weight";
      } else if (BMI >= 25 && BMI <= 29.99) {
        category = "Over Weight";
      } else {
        category = "Obese";
      }
    }
    let displayMsg = `Your BMI: ` + BMI.toFixed(2) + `<br>`;
    displayMsg += "Category: " + category;
    display.innerHTML = displayMsg;
  }
}
