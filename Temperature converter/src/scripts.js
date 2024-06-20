document.addEventListener('DOMContentLoaded', () => {
    const inputValue = document.getElementById('inputValue');
    const inputUnit = document.getElementById('inputUnit');
    const result = document.getElementById('result');

    document.querySelector('button').addEventListener('click', convertTemperature);

    function convertTemperature() {
        const value = parseFloat(inputValue.value);

        if (isNaN(value)) {
            result.textContent = 'Please enter a valid temperature.';
            return;
        }

        let convertedValue;
        let convertedUnit;

        if (inputUnit.value === 'Celsius') {
            convertedValue = (value * 9/5) + 32;
            convertedUnit = 'Fahrenheit';
        } else {
            convertedValue = (value - 32) * 5/9;
            convertedUnit = 'Celsius';
        }

        result.textContent = `${value.toFixed(2)}° ${inputUnit.value} is equal to ${convertedValue.toFixed(2)}° ${convertedUnit}.`;
    }
});
