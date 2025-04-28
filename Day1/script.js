class Calculator {
    static isNumeric(value) {
      return !isNaN(value) && typeof value !== 'boolean';
    }
  
    static add(a, b) {
      if (this.isNumeric(a) && this.isNumeric(b)) {
        return Number(a) + Number(b);
      }
      return "Invalid input for addition.";
    }
  
    static subtract(a, b) {
      if (this.isNumeric(a) && this.isNumeric(b)) {
        return Number(a) - Number(b);
      }
      return "Invalid input for subtraction.";
    }
  
    static multiply(a, b) {
      if (this.isNumeric(a) && this.isNumeric(b)) {
        return Number(a) * Number(b);
      }
      return "Invalid input for multiplication.";
    }
  
    static divide(a, b) {
      if (this.isNumeric(a) && this.isNumeric(b)) {
        if (Number(b) === 0) return "Error: Division by zero.";
        return Number(a) / Number(b);
      }
      return "Invalid input for division.";
    }
  
    static and(a, b) {
      return Boolean(a) && Boolean(b);
    }
  
    static or(a, b) {
      return Boolean(a) || Boolean(b);
    }
  
    static not(a) {
      return !Boolean(a);
    }
  
    static calculate(operation, a, b = null) {
      try {
        switch (operation) {
          case '+':
            return this.add(a, b);
          case '-':
            return this.subtract(a, b);
          case '*':
            return this.multiply(a, b);
          case '/':
            return this.divide(a, b);
          case '&&':
            return this.and(a, b);
          case '||':
            return this.or(a, b);
          case '!':
            return this.not(a);
          default:
            return "Unsupported operation.";
        }
      } catch (error) {
        return "An error occurred: " + error.message;
      }
    }
  }
  
  function performCalculation() {
    const inputA = document.getElementById('inputA').value;
    const inputB = document.getElementById('inputB').value;
    const operation = document.getElementById('operation').value;
  
    const a = isNaN(inputA) ? inputA : Number(inputA);
    const b = isNaN(inputB) ? inputB : Number(inputB);
  
    let result;
    if (operation === '!') {
      result = Calculator.calculate(operation, a);
    } else {
      result = Calculator.calculate(operation, a, b);
    }
  
    document.getElementById('result').textContent = `Result: ${result}`;
}