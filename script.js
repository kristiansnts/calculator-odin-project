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

const deleteButton = board.querySelector('.delete');
deleteButton.addEventListener('click', () => {
    if(!screenText.textContent){
        return;
    }
    const contents = screenText.textContent
                                    .slice(0, -1);
    screenText.textContent = contents
})

console.log(screenText.textContent.split(' '));
console.log(parseFloat('.09'))