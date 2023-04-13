// program for a simple calculator

var operator = prompt('Choose your next calculator process operator?(either+,-,*,/): ');

//take the operand input
var num1 = parseFloat(prompt('Enter your first number: '));
var num2 = parseFloat(prompt('Enter your second number: '));
//create a function hold the procrss of the calculator.
function result(){
    if (operator == '+'){
        result = num1 + num2
    } else if (operator == '-'){
        result = num1 - num2
    } else if (operator == '*'){
        result = num1 * num2
    } else if (operator == '/'){
        result = num1 / num2
    } else {
        console.log("Entered an invalid input");
    }
    //display the result inside of the function
    console.log('${num1} ${operator} ${num2} = ${result}');
}

//call the function by typing its name to make it ready to run
result();