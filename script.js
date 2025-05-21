// document.getElementById('calculate').addEventListener('click', function() {
//   const height = parseFloat(document.getElementById('height').value);
//   const weight = parseFloat(document.getElementById('weight').value);
//   const resultDiv = document.getElementById('result');

//   if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
//     resultDiv.textContent = 'Please enter valid height and weight.';
//     return;
//   }

//   const heightInMeters = height / 100;
//   const bmi = weight / (heightInMeters * heightInMeters);
//   const roundedBMI = bmi.toFixed(2);

//   let category = '';
//   if (bmi < 18.5) {
//     category = 'Underweight';
//   } else if (bmi < 25) {
//     category = 'Normal weight';
//   } else if (bmi < 30) {
//     category = 'Overweight';
//   } else {
//     category = 'Obese';
//   }

//   resultDiv.textContent = `Your BMI is: ${roundedBMI} (${category})`;
// });