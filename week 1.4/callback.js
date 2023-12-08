function square (a){
    return a*a;
}
// function cube(a){
//     return a*a*a
// }
 

function answer(a,b,callback){  //functions can be passed as a argument in js
let value1=callback(a)
let value2=callback(b)
return value1+value2

}
//console.log(answer(1,2,square));

let answerrrr=answer(1,2,function(n){ //anonymous function
    return n*n*n;
})
console.log(answerrrr);