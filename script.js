const screen = document.querySelector('.screen');
const screenText = screen.querySelector('h1');

const board = document.querySelector('.board');
const buttons = board.querySelectorAll('button[type="button"]');
buttons.forEach(button => {
    button.addEventListener('click', () => {
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
    console.log(buttonTrigger.classList.contains('delete'))
    if(buttonTrigger.classList.contains('delete')){
        contents = screenText.textContent.slice(0, -1);
        screenText.textContent = contents;
    }
    screenText.textContent = contents
}

const deleteButton = board.querySelector('.delete');
const resetButton = board.querySelector('.reset');
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

console.log(screenText.textContent.split(' '));
console.log(parseFloat('.09'))