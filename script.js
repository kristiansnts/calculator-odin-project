const screen = document.querySelector('.screen');
const screenText = screen.querySelector('h1');
const board = document.querySelector('.board');
const buttons = board.querySelectorAll('button[type="button"]');
const deleteButton = board.querySelector('.delete');
const resetButton = board.querySelector('.reset');
const getResult = board.querySelector('.trigger');

let isCalculated = false;

buttons.forEach(button => {
    button.addEventListener('click', () => {

        if(isCalculated){
            screenText.textContent = ""
            isCalculated = false;
        }

        const className = button.classList;
        let num = button.textContent;
        if(className.contains('delete') || className.contains('reset') || className.contains('trigger')){
            return;
        }
        if(!screenText.textContent && button.classList.contains('operator')){
            num = '';
        }
        screenText.textContent += num;
    })
})

function removeOnScreen(buttonTrigger){
    let contents = "";
    if(buttonTrigger.classList.contains('delete')){
        contents = screenText.textContent.slice(0, -1);
        screenText.textContent = contents;
    }
    screenText.textContent = contents
}

function Calculator(){
    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b
    }

    this.calculate = (str) => {
        let val = str.split(' '), 
        a = +(val[0]),
        op = val[1],
        b = +(val[2]);

        return this.methods[op](a,b)
    }
}

deleteButton.addEventListener('click', (e) => {
    if(!screenText.textContent){
        return;
    }
    const buttonTrigger = e.target;
    removeOnScreen(buttonTrigger)
})

resetButton.addEventListener('click', (e) => {
    if(!screenText.textContent){
        return;
    }
    const buttonTrigger = e.target;
    removeOnScreen(buttonTrigger)
})

getResult.addEventListener('click', function(){
    let calc = new Calculator;
    let getContent = screenText.textContent;
    let result = calc.calculate(getContent)
    screenText.textContent = (String(result).includes('.')) ? result.toFixed(2) : result;
    isCalculated = true;
})

