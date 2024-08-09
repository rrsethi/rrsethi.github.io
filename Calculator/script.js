// script.js
function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendCharacter(character) {
    document.getElementById('display').value += character;
}

function calculate() {
    try {
        let display = document.getElementById('display');
        let expression = display.value;

        // Replace the square root function
        expression = expression.replace(/sqrt\(/g, 'Math.sqrt(');
        expression = expression.replace(/\^/g, '**');

        // Evaluate the expression
        let result = eval(expression);

        // Display the result
        display.value = result;
    } catch (e) {
        display.value = 'Error';
    }
}
