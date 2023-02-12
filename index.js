let screen = document.querySelector('.screen')
const buttons = document.querySelectorAll('.btn')

let num1 = ''
let num2 = ''
let operator = null

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const screenText = screen.textContent
        const lastWord = screenText.slice(screenText.lastIndexOf())
        const conditionAddOperator = 
        lastWord != '+' && lastWord != '-' 
        && lastWord != '*' && lastWord != '/' 
        && lastWord != '.' && lastWord != ''
        switch (e.target.textContent) {
            case '0':
                displayNumber(e.target)
                break;
            case '1':
                displayNumber(e.target)
                break;
            case '2':
                displayNumber(e.target)
                break;
            case '3':
                displayNumber(e.target)
                break;
            case '4':
                displayNumber(e.target)
                break;
            case '5':
                displayNumber(e.target)
                break;
            case '6':
                displayNumber(e.target)
                break;
            case '7':
                displayNumber(e.target)
                break;
            case '8':
                displayNumber(e.target)
                break;
            case '9':
                displayNumber(e.target)
                break;
            case '.':
                if (operator == null && conditionAddOperator && !num1.includes('.')) {
                    num1 += e.target.textContent
                    screen.textContent = num1
                } else if (operator != null && conditionAddOperator && !num2.includes('.')) {
                    num1 += e.target.textContent
                    screen.textContent = num2
                }
                break;
            case 'DEL':
                if (operator == null) {
                    num1 = num1.slice(0, -1)
                    screen.textContent = num1
                } else if (operator != null && num2 == '') {
                    num1 = num1.slice(0, -1)
                    screen.textContent = num1
                    num2 = ''
                }
                break;
            case '+':
                putOperator('add')
                break;
            case '-':
                putOperator('sub')
                break; 
            case 'x':
                putOperator('mult')
                break;
            case '/':
                putOperator('div')
                break;
            case '=':
                num1 = outcome(operator)
                num2 = ''
                operator = null
                break;
            case 'C':
                num1 = ''
                num2 = ''
                operator = null
                screen.textContent = ''
                break;
            default:
                break;
        }
    })
})

    //if num2 rỗng, the operator will be put, if num2 has value, 
    //thực hiện tính trc after that operator mới dc gán
const putOperator = (operation) => {
    if (num2 == '') {
        if (num1 != '') return operator = operation
    } else {
        num1 = outcome(operator)
        num2 = ''
        operator = operation
    }
}

    //put value for num1 if chưa đặt phép tính, already have operator thì put value for num2
const displayNumber = (button) => {
    if (operator == null) {
        num1 += button.textContent
        screen.textContent = num1
    } else {
        num2 += button.textContent
        screen.textContent = num2
    }
}

    //print out value of operation - result
const outcome = (operator) => {
    let result;
    switch (operator) {
        case 'add':
            result = Number(num1) + Number(num2)
            screen.textContent = result
            break;
        case 'sub':
            result = Number(num1) - Number(num2)
            screen.textContent = result
            break;
        case 'mult':
            result = Number(num1) * Number(num2)
            screen.textContent = result
            break;
        case 'div':
            result = Number(num1) / Number(num2)
            screen.textContent = result
            break;
        default:
            break;
    }
    return result
}
