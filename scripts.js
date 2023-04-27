const buttons = document.querySelectorAll("button");
const currentEqu = document.querySelector("#currentEqu");
const currentNum = document.querySelector("#currentNum");

let number1 = "";
let number2 = "";
let operator = "";
let answer = "";
buttons.forEach(btn => {
    btn.onclick = () => {
        let content = btn.textContent;
        if(content === "CLEAR"){
            currentEqu.textContent = "";
            currentNum.textContent = "0";
            number1 = "";
            number2 = "";
            operator = "";
        }else if(content === "DELETE"){
            currentNum.textContent = currentNum.textContent.slice(0, -1);
            if(currentNum.textContent === "") currentNum.textContent = "0";
        }else if(!isNaN(content)){
            (currentNum.textContent === "0") ? currentNum.textContent = btn.textContent: currentNum.textContent += btn.textContent;
        }else if(content === "."){
            currentNum.textContent += btn.textContent;
        }else if(content === "="){
            if(number1){
                number2 = currentNum.textContent;
                answer = operate(parseFloat(number1), parseFloat(number2), operator);
                answer = Math.round(answer * 1000) / 1000;
                currentEqu.textContent = `${number1} ${operator} ${number2} =`;
                currentNum.textContent = answer;
            }
        }else{
            if(number1){
                number2 = currentNum.textContent;
                answer = operate(parseFloat(number1), parseFloat(number2), operator);
                answer = Math.round(answer * 1000) / 1000;
                number1 = answer;
                currentEqu.textContent = `${number1} ${operator}`;
                currentNum.textContent = "0";
            }else{
                number1 = currentNum.textContent;
            }
            operator = content;
            currentEqu.textContent = `${number1} ${operator}`;
            currentNum.textContent = "0";
        }
    }
});

function operate(num1, num2, op){
    switch (op){
        case "÷":
            return num1/num2;
            break;
        case "x":
            return num1*num2;
            break;
        case "-":
            return num1-num2;
            break;
        case "+":
            return num1+num2;
            break;
    }
}