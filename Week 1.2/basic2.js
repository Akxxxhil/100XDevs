function sum(num1, num2,arg) {
    let summ=num1+num2
    arg(summ)
    
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum
sum(1,2,displayResult);