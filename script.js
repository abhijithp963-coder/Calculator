const resultInput = document.getElementById('result');

function appendNumber(number) {
    resultInput.value += number;
}

function appendOperator(operator) {
    if (resultInput.value === '' && operator === '-') {
        resultInput.value = '-';
        return;
    }
    if (resultInput.value === '' || isNaN(resultInput.value.slice(-1))) {
        return;
    }
    resultInput.value += operator;
}

function clearDisplay() {
    resultInput.value = '';
}

function deleteLast() {
    resultInput.value = resultInput.value.slice(0, -1);
}

function calculateResult() {
    try {
        if (resultInput.value === '') {
            return;
        }
        const result = eval(resultInput.value);
        if (isNaN(result) || !isFinite(result)) {
            resultInput.value = 'Error';
        } else {
            resultInput.value = result;
        }
    } catch (error) {
        resultInput.value = 'Error';
    }
}
