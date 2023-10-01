//1.If lengths of three sides of a triangle are input through the keyboard, 
//write a program to find the area of the triangle.

// const side1 = prompt("enter the side first")
// const side2 = prompt("enter the side second")
// const side3 = prompt("enter the side third")
// console.log("three side of triangle", side1, side2, side3)
// const side = (side1 + side2 + side3) / 2;

// const areavalue = Math.sqrt(side * ((side - side1) * (side - side2) * (side - side3)))
// console.log(`area of triangle is ${areavalue}`)

//2.If a five-digit number is input through the keyboard, write a program to calculate 
//the sum of its digits.(Hint: Use the modulus operator ‘%’)

// const number1 = prompt("enter first number")
// const number2 = prompt("enter second number")
// const number3 = prompt("enter third number")
// const number4 = prompt("enter fourth number")
// const number5 = prompt("enter fifth number")
// console.log("enter five number", number1, number2, number3, number4, number5)
// function remainder() {
//     remain1 = number1 % number2;
//     remain2 = number2 % number3;
//     remain3 = number3 % number4;
//     remain4 = number4 % number5;
//     remain5 = number5 % number1;
//     console.log(`reaminder of five digit ${remain1},${remain2},${remain3},${remain4},${remain5}`)
//     sum = remain1 + remain2 + remain3 + remain4 + remain5
//     console.log("sum of five digit", sum)
// }
// remainder()

//3.if a five-digit number is input through the keyboard, program to reverse the number.
// (Hint: Use the modulus operator ‘%’)

// const num1 = prompt("enter first number")
// const num2 = prompt("enter second number")
// const num3 = prompt("enter third number")
// const num4 = prompt("enter fourth number")
// const num5 = prompt("enter fifth number")
// console.log("enter five number", num1, num2, num3, num4, num5)
// function remainder() {
//     rem1 = num1 % num2;
//     rem2 = num2 % num3;
//     rem3 = num3 % num4;
//     rem4 = num4 % num5;
//     rem5 = num5 % num1;
//     console.log(`reaminder of five digit ${rem1},${rem2},${rem3},${rem4},${rem5}`)}

//4.Any integer is input through the keyboard. Write a program to find out whether it
//is an odd number or even number.

// const digit = prompt("enter number")
// console.log("enter a number", digit)
// function evenodd() {
//     if (isNaN(digit)) {
//         return console.log("please enter a valid number")
//     }
//     if (digit % 2 == 0) {
//         console.log(`${digit} is even`)
//     }
//     else {
//         console.log(`${digit} is odd`)
//     }
// } evenodd()

//5.check if number if positive or negative

// const numbr = prompt("enter a number")
// console.log("entered number", numbr)
// function positivenegative() {
//     if (isNaN(numbr)) {
//         return console.log("please enter a valid number")
//     }
//     if (numbr > 0) {
//         console.log(`${numbr} is positive`)
//     }
//     else {
//         console.log(`${numbr} is negative`)
//     }
// }
// positivenegative()


//7.Any year is input through the keyboard. 'Write a program to determine whether 
//the year is a leap year or not. (Hint: Use the % (modulus) operator)

// const year = prompt("enter a year")
// console.log("entered year", year)
// function years() {
//     if (isNaN(year)) {
//         return console.log("please enter a valid yaer")
//     }
//     if (year % 4 == 0) {
//         console.log(`${year} is a leap year`)
//     }
//     else {
//         console.log(`${year} is not leap year`)
//     }
// }
// years()


//8.If the ages of Ram, Shyam and Ajay are input through the keyboard, write a program 
//to determine the youngest of the three.

// const ram = prompt("enter the age of ram")
// const shyam = prompt("enter the age of shyam")
// const Ajay = prompt("enter the age of Ajay")
// console.log(`entred age ram ${ram},shyam ${shyam},Ajay ${Ajay}`)
// function younger() {
//     if (ram < shyam && ram < Ajay) {
//         return console.log("ram is younger")
//     }
//     if (shyam < ram && shyam < Ajay) {
//         return console.log("shyam is younger")
//     }
//     else {
//         return console.log("Ajay is younger")
//     }
// } younger()

//9.Given the length and breadth of a rectangle, write a program to find whether the 
//area of the rectangle is greater than its perimeter. For example, the area of the 
//rectangle with length = 5 and breadth = 4 is greater than its perimeter.


function areaperimeter(length, breadth) {
    areaofrectangle = length * breadth;
    perimeter = 2 * (length + breadth)
    if (areaofrectangle > perimeter) {
        console.log("area of rectangle is graeter")
    }
    else {
        console.log("perimter is graeter")
    }
} areaperimeter(5, 4)

//10.Write a program to check whether a triangle is valid or not, when the three angles 
//of the triangle are entered through the keyboard. A triangle is valid if the sum of 
//all the three angles is equal to 180 degrees

function triangle(side1, side2, side3) {
    sum = (side1 + side2 + side3)
    if (sum == 180) {
        console.log("traingle is valid")
    }
    else {
        console.log("triangle is not valid")
    }
}
triangle(120, 30, 30)
triangle(12, 30, 30)