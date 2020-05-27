// const keyOne = document.getElementById('1').addEventListener('click', updateDisplay);
// const keyTwo = document.getElementById('2').addEventListener('click', updateDisplay);
// const keyThree = document.getElementById('3').addEventListener('click', updateDisplay);
// const keyFor = document.getElementById('4').addEventListener('click', updateDisplay);
// const keyFive = document.getElementById('5').addEventListener('click', updateDisplay);
// const keySix = document.getElementById('6').addEventListener('click', updateDisplay);
// const keySeven = document.getElementById('7').addEventListener('click', updateDisplay);
// const keyEight = document.getElementById('8').addEventListener('click', updateDisplay);
// const keyNine = document.getElementById('9').addEventListener('click', updateDisplay);
// const keyZero = document.getElementById('0').addEventListener('click', updateDisplay);
// const keyPlus = document.getElementById('+').addEventListener('click', updateDisplay);
// const keyMinus = document.getElementById('-').addEventListener('click', updateDisplay);
// const keyMultiplication = document.getElementById('x').addEventListener('click', updateDisplay);
// const keyDivision = document.getElementById('/').addEventListener('click', updateDisplay);
// const keyEqual = document.getElementById('=').addEventListener('click', updateDisplay);
// const keyAc = document.getElementById('AC').addEventListener('click', updateDisplay);
// const keyPoint = document.getElementById('.').addEventListener('click', updateDisplay);


// let startingPoint = 0;

// function operators() {
//     console.log('operator');
// }

// function calcResult() {
//     console.log('result');

// }
// let arr = [];
// function resett() {
//     document.getElementById('display').innerText = result;
//     document.getElementById("myForm").resett();
//   }
// function updateDisplay() {
//     const pressedButton = this.innerText; //always will be the 1,2,3

//     document.getElementById('display').innerHTML = pressedButton;
//     arr.push(pressedButton);
//     console.log(arr);

//     const result = arr.toString().replace(/,/g, '');

//     document.getElementById('display').innerText = result;

//     console.log(arr.toString().replace(/,/g, ''));



// }

var inputLabel = document.getElementById('display');

function pushBtn(obj) {

    var pushed = obj.innerHTML;

    if (pushed == '=') {
        // Calculate
        inputLabel.innerHTML = eval(inputLabel.innerHTML);

    } else if (pushed == 'AC') {
        // All Clear
        inputLabel.innerHTML = '0';
    } else {
        if (inputLabel.innerHTML == '0') {
            inputLabel.innerHTML = pushed;

        } else {
            inputLabel.innerHTML += pushed;
        }
    }
}
