const display = document.getElementById('display');

function insert(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key.match(/[0-9\/*\-+\(\)\.]/)) {
        insert(event.key);
    } else if (event.key === 'Enter') {
        calculate();
    } else if (event.key === 'Backspace') {
        deleteLast();
    } else if (event.key === 'Escape') {
        clearDisplay();
    } else if (event.key === 's') {
        insert('Math.sin(');
    } else if (event.key === 'c') {
        insert('Math.cos(');
    } else if (event.key === 't') {
        insert('Math.tan(');
    } else if (event.key === 'l') {
        insert('Math.log(');
    } else if (event.key === 'r') {
        insert('Math.sqrt(');
    } else if (event.key === 'p') {
        insert('Math.PI');
    }
});
