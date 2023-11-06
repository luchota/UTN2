document.addEventListener("DOMContentLoaded", function () {
    const operand1 = document.querySelector('.Inputs input:nth-child(1)');
    const operand2 = document.querySelector('.Inputs input:nth-child(2)');
    const addButton = document.querySelector('.buttons button:nth-child(1)');
    const subtractButton = document.querySelector('.buttons button:nth-child(2)');
    const multiplyButton = document.querySelector('.buttons button:nth-child(3)');
    const divideButton = document.querySelector('.buttons button:nth-child(4)');
    const result = document.querySelector('.output .result');
  
    addButton.addEventListener("click", function () {
      const num1 = parseFloat(operand1.value);
      const num2 = parseFloat(operand2.value);
      const sum = num1 + num2;
      result.textContent = "Resultado: " + sum;
    });
  
    subtractButton.addEventListener("click", function () {
      const num1 = parseFloat(operand1.value);
      const num2 = parseFloat(operand2.value);
      const difference = num1 - num2;
      result.textContent = "Resultado: " + difference;
    });
  
    multiplyButton.addEventListener("click", function () {
      const num1 = parseFloat(operand1.value);
      const num2 = parseFloat(operand2.value);
      const product = num1 * num2;
      result.textContent = "Resultado: " + product;
    });
  
    divideButton.addEventListener("click", function () {
      const num1 = parseFloat(operand1.value);
      const num2 = parseFloat(operand2.value);
      if (num2 !== 0) {
        const quotient = num1 / num2;
        result.textContent = "Resultado: " + quotient;
      } else {
        result.textContent = "Resultado: Error (división por cero)";
      }
    });
  });
  