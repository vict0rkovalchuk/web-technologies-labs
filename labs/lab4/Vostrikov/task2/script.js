let display = document.querySelector('.display');
let currentNum = '0';
let storedNum = null;
let operation = null;
let decimalPressed = false;

function addToDisplay(num) {
  if (num === '.' && decimalPressed) return;
  if (currentNum === '0') {
    currentNum = num;
  } else {
    currentNum += num;
  }
  display.textContent = currentNum;
  if (num === '.') {
    decimalPressed = true;
  }
}

function clearDisplay() {
  currentNum = '0';
  storedNum = null;
  operation = null;
  decimalPressed = false;
  display.textContent = currentNum;
}

function doOperation(op) {
  storedNum = currentNum;
  currentNum = '0';
  operation = op;
  decimalPressed = false;
}

function calculate() {
  if (operation === '+') {
    currentNum = String(parseFloat(storedNum) + parseFloat(currentNum));
  } else if (operation === '-') {
    currentNum = String(parseFloat(storedNum) - parseFloat(currentNum));
  } else if (operation === '*') {
    currentNum = String(parseFloat(storedNum) * parseFloat(currentNum));
  } else if (operation === '/') {
    currentNum = String(parseFloat(storedNum) / parseFloat(currentNum));
  } else if (operation === '%') {
    currentNum = String(parseFloat(storedNum) % parseFloat(currentNum));
  } else if (operation === 'sqrt') {
    currentNum = String(Math.sqrt(parseFloat(currentNum)));
  } else if (operation === '^') {
    currentNum = String(
      Math.pow(parseFloat(storedNum), parseFloat(currentNum))
    );
  }
  display.textContent = currentNum;
  storedNum = null;
  operation = null;
  decimalPressed = false;
}

document.querySelectorAll('.num-btn').forEach((button) => {
  button.addEventListener('click', () => {
    addToDisplay(button.textContent);
  });
});

document.querySelector('.dec-btn').addEventListener('click', () => {
  addToDisplay('.');
});

document.querySelector('.clear-btn').addEventListener('click', () => {
  clearDisplay();
});

document.querySelectorAll('.op-btn').forEach((button) => {
  button.addEventListener('click', () => {
    doOperation(button.textContent);
  });
});

document.querySelector('.eq-btn').addEventListener('click', () => {
  calculate();
});
