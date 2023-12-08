function square ( num){
   return num*num;
}
function addsquare(num1, num2){
    let value1=square(num1);
    let value2=square(num2);
    return value1+value2

}

console.log(addsquare(2,1));