
const number1 = document.getElementById("number-1");
const number2 = document.getElementById("number-2");
const number3 = document.getElementById("number-3");
const number4 = document.getElementById("number-4");

document.getElementById("number-3").readOnly = true 
document.getElementById("number-4").readOnly = true 

number1.addEventListener("input", calculateRatio);
number2.addEventListener("input", calculateRatio);


function calculateGcd(num1, num2) {
  if (num2 === 0) {
    return num1;
  }
  return calculateGcd(num2, num1 % num2);
}
function calculateRatio() {
  let num1 = parseInt(number1.value);
  let num2 = parseInt(number2.value);
  if (num1 !==  0 && num2 !== 0) {
    let divisor = calculateGcd(num1, num2);
    number3.value = num1 / divisor;
    number4.value = num2 / divisor;}

  }

