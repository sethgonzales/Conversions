//business logic
function convertCelsius1(fahrenheit1) {
    return (fahrenheit1-32)*5/9;
}

function convertToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// user logic
const celsiusInput = parseFloat(window.prompt("Enter number to be converted to Fahrenheit: "));

window.alert(convertToFahrenheit(celsiusInput));

const fahrenheit = parseInt(window.prompt("Enter your temperature in fahrenheit"));

window.alert(convertCelsius1(fahrenheit));

