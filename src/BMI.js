// Name: Emilina Sanduleac
// Date: 3/28/2023
// Description: BMI calculator that will show if you are underweight or not

'use strict';

const selector = String(document.getElementById('units'))
const weight = document.getElementById('weightInput')
const height = document.getElementById('heightInput')



let calculateBMI = () => {
    alert(weight.value)
    if (selector === "US customary") {
        let weightTotal = Number(weight.value);
        let heightTotal = Number(height.value);

    }
}