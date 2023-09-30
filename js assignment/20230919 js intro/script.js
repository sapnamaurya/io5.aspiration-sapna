console.log("Hello word");
var avariable = 30;
console.log("variable", avariable);
//to check data type in js we use typeof function
let checkundefined;

let value;
value = 60;
console.log("value", value);
console.log("check undefined", checkundefined);
let car = "kia";
console.log("datatype ->", typeof car);
console.log("car variable value", car);

const ndatatype = 50;
console.log("number data type->", typeof ndatatype);

const booldatatype = false;
console.log("boolean data type->", typeof booldatatype);

let bigintdatatype = 23456789678964879879999999999999999999999999999999999999999999999998730493492852938667872;
console.log("big int->", BigInt(bigintdatatype));

let ab = null;
ab = 20;
console.log("a", typeof ab);
// with function keyword
// function funname(){}
//funname()->function call
//{}->functon Scope
//2.arrow functon
//const functionname=()=>{}
//functionname()->functon call
//3. anonymous function
//let greeet=function(){}
//greet()
//witthout functoin keyword--
// ()=>{}
// ();
// 4. immmediately invoked functon--
// (functon(){
//     console.log('test')
// })
// ();


//name function
function funname() {
    console.log("this is arrow function");
}
funname();
const functionname = () => {
    console.log("this nis arrow function");
};
functionname();
let greet = function () {
    console.log("hello");
};
greet();
(function (val) {
    console.log("immediately invoked function", val);
})("immediate");

function greeting(value) {
    console.log(`hello,>,${value}`);
    let val = 5
    return val;
}
greeting("good morning");
console.log("functoin console", greeting())
greeting("sapna");
greeting(50);
greeting(true);
const greetingfun = (name, msg, temp, t) => {
    console.log("value in arrow function", name, msg.temp, t);
    console.log(`hello,${name},${msg},${temp} ${name}`, t);

}
greetingfun("sapna", "good morning", "thankyou");
