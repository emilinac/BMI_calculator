// Name: Emilina Sanduleac
// Date: 7/31/23
// Description: BMI calculator in metric and Imperial form.

'use strict';

function measureBMI () {
    let unit = document.getElementById("bmi-metric").checked,
        weight = document.getElementById("bmi-weight"),
        weightUnit = document.getElementById("bmi-weight-unit"),
        height = document.getElementById("bmi-height"),
        heightUnit = document.getElementById("bmi-height-unit");

    if (unit) {
        weightUnit.innerHTML = "KG";
        weight.min = 1; weight.max = 362;
        heightUnit.innerHTML = "CM";
        height.min = 50; height.max = 215;
    } else {
        weightUnit.innerHTML = "LBS";
        weight.min = 10; weight.max = 800;
        heightUnit.innerHTML = "IN";
        height.min = 20; height.max = 85;
    }
}
function calcBMI () {
    let bmi,
        unit = document.getElementById("bmi-metric").checked,
        weight = parseInt(document.getElementById("bmi-weight").value),
        height = parseInt(document.getElementById("bmi-height").value),
        results = document.getElementById("bmi-results");

    if (unit) {
        height = height / 100;
        bmi = weight / (height * height);
    }

    else {
        bmi = 703 * (weight / (height * height));
    }

    bmi = Math.round(bmi * 100) / 100;

    if (bmi < 18.5) {
        results.innerHTML = bmi + " - Underweight";
    } else if (bmi < 25) {
        results.innerHTML = bmi + " - Normal weight";
    } else if (bmi < 30) {
        results.innerHTML = bmi + " - Overweight";
    } else if (bmi < 35) {
        results.innerHTML = bmi + " - Obese";
    } else {
        results.innerHTML = bmi + " - Extremely Obese";
    }
    return false;
}
