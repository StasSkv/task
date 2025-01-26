const refs = {
  firstNum: document.querySelector("#first-number"),
  secondNum: document.querySelector("#second-number"),
  result: document.querySelector("#result"),
  errorMessage: document.querySelector("#error-message"),
  addButton: document.querySelector("#add"),
  subtractButton: document.querySelector("#subtract"),
  multiplyButton: document.querySelector("#multiply"),
  divideButton: document.querySelector("#divide"),
};

let currentOperation = null;
function updateResult() {
  const num1 = parseFloat(refs.firstNum.value);
  const num2 = parseFloat(refs.secondNum.value);

  if (currentOperation === null) {
    return;
  } else {
    calculate(currentOperation, num1, num2);
  }
}

function calculate(operation, num1, num2) {
  let result;
  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      if (num2 === 0) {
        refs.errorMessage.textContent = "На нуль ділити не можна!";
        refs.result.textContent = "Результат: ";
        return;
      }
      result = num1 / num2;
      break;
    default:
      refs.result.textContent = "Результат: ";
      return;
  }
  refs.result.textContent = `Результат: ${result}`;
}

refs.addButton.addEventListener("click", () => {
  currentOperation = "add";
  updateResult();
});
refs.subtractButton.addEventListener("click", () => {
  currentOperation = "subtract";
  updateResult();
});
refs.multiplyButton.addEventListener("click", () => {
  currentOperation = "multiply";
  updateResult();
});
refs.divideButton.addEventListener("click", () => {
  currentOperation = "divide";
  updateResult();
});

refs.firstNum.addEventListener("input", updateResult);
refs.secondNum.addEventListener("input", updateResult);
