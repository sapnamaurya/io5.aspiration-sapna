//1. Write a function to print your name, hobbies
function username(name) {
    console.log(`My name is ${name}`)
}
username("sapan maurya")


function myhobby(hobby) {
    console.log(`My hobbies to ${hobby}`)
}
myhobby("learn new things")

/*2. Write a function to enter your you favorite avengers and concat with string 
Input: entered {avenger-name} from keyboard
Output: My favorite avenger is {avenger-name}.
 I am dying heart fan of {avenger-name}*/


const avengername = prompt("Entered the avenger name");
console.log("avengernames--- ", avengername)
function avgname(name) {
    console.log(`My favourite avenger name is ${avengername} . I am Dying Heart fan of ${avengername} `)
} avgname(avengername)

// 3. Write a program to calculate sum of 5 subject entered using keyboard

const sum1 = prompt("enter first subject marks")
const sum2 = prompt("enter second subject marks")
const sum3 = prompt("enter third subject marks")
const sum4 = prompt("enter fourth subject marks")
const sum5 = prompt("enter fifth subject marks")
console.log("enter marks in five subject--", sum1, sum2, sum3, sum4, sum5)

function sum(sum1, sum2, sum3, sum4, sum5) {
    const summ = Number(sum1) + Number(sum2) + Number(sum3) + Number(sum4) + Number(sum5)

    console.log(`sum of five subject is ${summ}`)
}
sum(sum1, sum2, sum3, sum4, sum5)

/*4. Enter 10 numbers from keyboard and Write a program to 
calculate average of those 10 numbers*/

const num1 = prompt("enter first number")
const num2 = prompt("enter second number")
const num3 = prompt("enter third number")
const num4 = prompt("enter fourth number")
const num5 = prompt("enter fifth number")
const num6 = prompt("enter sixth number")
const num7 = prompt("enter seveth number")
const num8 = prompt("enter eight number")
const num9 = prompt("enter ninth number")
const num10 = prompt("enter tenth number")
console.log("enter the 10 number--", num1, num2, num3, num4, num5, num6, num7, num8, num9, num10)
function avg(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10) {
    average = (Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5) + Number(num6) + Number(num7) + Number(num8) + Number(num9) + Number(num10)) / 10
    console.log("Average of ten number ==" + average)
}
avg(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10)


// 5. Write a function to find a number(Entered through keyboard) is EVEN || ODD
const num = prompt("enter a number")
console.log("enter a number")
function number(num) {
    if (num % 2 == 0) {
        console.log(`${num} is even`)
    }
    else {
        console.log(`${num} is odd`)
    }
}
number(num)

// 6. Write a function to calculate simple interest.
function simpleinterest(principle, rate, time) {
    interest = (principle * rate * time) / 100
    console.log("simple interset =", interest)
}
simpleinterest(1200, 3000, 2)

// 7. check if number if positive or negative
const numbr = prompt("enter a number")
console.log("enterd number=", numbr)
function number(numbr) {
    if (numbr > 0) {
        console.log(`${numbr} is positive`)
    }
    else {
        console.log(`${numbr} is negative`)
    }
}
number(numbr)
//8. wap to find leap year or not
function year() {
    const years = prompt("enter a year")
    console.log("entered year")
    if (isNaN(years)) {
        return console.log(`${years} is not valid yaer`)
    }
    if (years % 4 == 0) {
        console.log(`${years}is leap year`)
    }
    else {
        console.log(`${years}is not leap year`)
    }
}
year()