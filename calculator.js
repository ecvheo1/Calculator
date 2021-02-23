const result = document.querySelector(".result");
const isNumber = input => Number.isInteger(parseInt(input)) || input ==='.';

const clickNumbers = number => {
    if(number !== '.' && result.innerText === '0') {
        result.innerText = number;
    }
    else if (number !== '.' || result.innerText.indexOf('.') === -1)
    {
        result.innerText += number;
    }
}


const handleCalculator = (event) => {
    const input = event.target.innerText;
    
    if(isNumber(input)) {

        clickNumbers(input);
    }
};