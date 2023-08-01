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
        weight.min = 1; weight.max = 635;
        heightUnit.innerHTML = "CM";
        height.min = 54; height.max = 272;
    } else {
        weightUnit.innerHTML = "LBS";
        weight.min = 2; weight.max = 1400;
        heightUnit.innerHTML = "IN";
        height.min = 21; height.max = 107;
    }
}
function calcBMI () {
    let bmi = null,
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
        results.innerHTML = bmi + " - Pre-obesity";
    } else if (bmi < 35) {
        results.innerHTML = bmi + " - Obesity class I";
    } else if (bmi < 40) {
        results.innerHTML = bmi + " - Obesity class II";
    } else {
        results.innerHTML = bmi + " - Obesity class III";
    }
    return false;
}
