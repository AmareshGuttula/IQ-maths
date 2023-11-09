// Function to generate a random math equation
const generateEquation = () => {
  const operators = ['+', '-', '*', '/'];
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operator = operators[getRandomNumber(operators.length)];

  const equation = `${num1} ${operator} ${num2}`;
  document.getElementById('equation').textContent = equation;
};

// Function to get a random number within a specified range
const getRandomNumber = (max = 10, min = 1) => Math.floor(Math.random() * (max - min + 1)) + min;

// Function to check the player's answer
const checkAnswer = () => {
  const equationText = document.getElementById('equation').textContent;
  const playerAnswer = document.getElementById('answer').value.trim();

  try {
    const correctAnswer = eval(equationText);

    if (playerAnswer === String(correctAnswer)) {
      displayResult('Correct! Well done!');
    } else {
      displayResult('Incorrect. Try again.');
    }
  } catch (error) {
    displayResult('Invalid equation. Try again.');
  }
};

// Function to display the result message
const displayResult = (message) => {
  document.getElementById('result').textContent = message;
};

// Function to start a new game
const newGame = () => {
  document.getElementById('answer').value = '';
  displayResult('');
  generateEquation();
};

// Initial setup
generateEquation();
