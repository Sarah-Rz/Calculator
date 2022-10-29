let trailingResult = 0;
let operationOptions = ['/', 'x', '-', '+'];
let workingOperation = "";

function showNumOnDisplay(input) {
    let display = document.getElementById('display');
    let secondaryDisplay = document.getElementById('secondaryDisplay'); 

    if (display.innerHTML === '0' && operationOptions.indexOf(input) === -1) {
        if (input === '.') {
            display.innerHTML = "0.";
        } else if (input === "negative-value") { 
            if (display.innerHTML.indexOf("-1") === -1) {
                display.innerHTML = "-" + display.innerHTML
            } else if (display.innerHTML.indexOf("-1" > -1)) {
                display.innerHTML = display.innerHTML.slice(1, display.innerHTML.length);
            }    
        } else {
            display.innerHTML = input;
        }
    } else if (operationOptions.indexOf(input) >= 0) {
        // console.log("dealing with an operation");

        if (trailingResult === display.innerHTML) {
        // Operand button pressed twice exception
          workingOperation = input;  
    } else if (workingOperation === "") {
        // Dealing with an operand
        workingOperation = input;
        trailingResult = display.innerHTML;
        display.innerHTML = 0;
    }  else {
        // Dealing with a set operand
        // console.log(display.innerHTML, 'Dealing with set operand')
        trailingResult = calculate(trailingResult, display.innerHTML, workingOperation);
        secondaryDisplay.innerHTML = trailingResult;
        display.innerHTML = 0;
        workingOperation = input;
    }
        
    } else if (input === '=') {
        display.innerHTML = calculate(trailingResult, display.innerHTML, workingOperation);
        trailingResult = 0;
        workingOperation = "";
    } else if (input === '.') {
        // console.log('decimal clicked');
        if (display.innerHTML.indexOf(".") === -1) {
            display.innerHTML += ".";
        }
        // console.log("decimal skipped because decimal already in number.");    
    } else if (input === "negative-value") {
        if (display.innerHTML.indexOf("-1") === -1) {
         display.innerHTML = "-" + display.innerHTML
        } else if (display.innerHTML.indexOf("-1" > -1)) {
            display.innerHTML = display.innerHTML.slice(1, display.innerHTML.length);
        } 
    } else {
        display.innerHTML += input;
    }

    // console.log(trailingResult, "<= trailingResult", display.innerHTML, "<= display.innerHTML", workingOperation, "<= workingOperation");

}

function clearDisplay() {
    let display = document.getElementById('display');
    trailingResult = 0;
    display.innerHTML = 0;
}

function calculate(firstNum, secondNum, operation) {
    let result;
    firstNum = parseFloat(firstNum);
    secondNum = parseFloat(secondNum);
    switch(operation) {
        case "+":
            // console.log('add calculated')
            result = firstNum + secondNum;
            break;
        case "-":
            // console.log('subtract calculated')
            result = firstNum - secondNum;
           break;
        case "x":
            // console.log('multiply calculated')
            result = firstNum * secondNum;
           break;
        case "/":
            // console.log('divde calculated')
            result = firstNum / secondNum;
           break;
        default: 
           console.log("calculate switch statement missed something");
    }
    return result.toString();
}

