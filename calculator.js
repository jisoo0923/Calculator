function addOutput(num) {
    var display = document.getElementById("display");
    display.value = display.value + num;
}

function calculate() {
    var display = document.getElementById("display");
    var result = eval(display.value);
    var displayResult = document.getElementById("result");
    displayResult.value = result;

    return String(displayResult);
}

function reset() {
    var display = document.getElementById("display");
    display.value = "";
    var displayResult = document.getElementById("result");
    displayResult.value = "";
}

// function del() {
//     var display = document.getElementById("display");
//     display.value = display.value.substring(0, display.value.length - 1);
// }

function showOutput(num) {
    if (operator === '=') {
        return String(num);
    }
}

// // 계산기가 계산을 할 수 있도록 계산 함수
// function calculate(n1, operator, n2) {
//     let result = 0;

//     if (operator === '+') {            // '+' 버튼을 눌렀을 때
//         display = Number(n1) + Number(n2);
//     }
//     else if (operator === '-') {        // '-' 버튼을 눌렀을 때
//         display = Number(n1) - Number(n2);
//     }
//     else if (operator === '*') {        // '*' 버튼을 눌렀을 때
//         display = Number(n1) * Number(n2);
//     }
//     if (operator === '/') {             // '/' 버튼을 눌렀을 때
//         display = Number(n1) / Number(n2);
//     }

//     showOutput(display);

//     // if (operator === '=') {
//     //     return String(display);
//     // }
// }

// // 'AC' 버튼을 눌렀을 때 초기화하는 함수
// function reset() {
//     // var reset = document.getElementById('reset');
//     display.value = "0";
// }

// '+/-' 버튼을 눌렀을 때 부호를 바꿔주는 함수
function convertPlusMinus(num) {
    var num = document.getElementById("display");
    num.value = -Number(num.value);

    return String(num.value);
}

// '%' 버튼을 눌렀을 때 percent로 바꿔주는 함수
function percent(num) {
    var num = document.getElementById("display");
    num.value = Number(num.value) * 0.01;

    return String(num.value);
}

// // '+/-', '%', 1~9 버튼은 여러 번 누를 수 있게 해주는 함수
// function operatorNum() {
//     var op = document.
// }