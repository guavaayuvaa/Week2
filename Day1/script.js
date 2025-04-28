let expression = '';

function press(value) {
  if (expression.length >= 20) return; // Limit input length
  if (document.getElementById('display').innerText === "0" && value !== ".") {
    expression = value;
  } else {
    expression += value;
  }
  document.getElementById('display').innerText = expression;
}

function calculate() {
  try {
    const result = eval(expression);
    expression = result.toString();
    document.getElementById('display').innerText = expression;
  } catch {
    document.getElementById('display').innerText = "Error";
    expression = '';
  }
}
