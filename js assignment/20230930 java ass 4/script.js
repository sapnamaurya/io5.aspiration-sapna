// //1.If lengths of three sides of a triangle are input through the keyboard, 
// //write a program to find the area of the triangle.
function triangle() {
    const side1 = Number(prompt("enter the side first"))
    const side2 = Number(prompt("enter the side second"))
    const side3 = Number(prompt("enter the side third"))
    console.log("three side of triangle")
    const side = (side1 + side2 + side3) / 2;

    const areavalue = Math.sqrt(side * (side - side1) * (side - side2) * (side - side3))
    console.log(`area of triangle is ${areavalue}`)
}
// triangle();

//2.If a five-digit number is input through the keyboard, write a program to calculate
//the sum of its digits.(Hint: Use the modulus operator ‘%’)


function sumoffivedigit() {
    const number1 = Number(prompt("enter five digit number"))
    console.log("enter five number", number1)
    let a = Math.trunc(number1 % 10)
    let b = Math.trunc(number1 / 10) % 10
    let c = Math.trunc(number1 / 100) % 10
    let d = Math.trunc(number1 / 1000) % 10
    let e = Math.trunc(number1 / 10000) % 10
    console.log("sum of five digit", a, b, c, d, e)
    const sum = (a) + (b) + (c) + (d) + (e)
    console.log("sum of five digit", sum)

}
// sumoffivedigit()

//3.if a five-digit number is input through the keyboard, program to reverse the number.
// (Hint: Use the modulus operator ‘%’)

function reverse() {
    const num = Number(prompt("enter a five digit number"))
    console.log("enterd number", num)
    let f = Math.trunc(num % 10)
    let g = Math.trunc(num / 10) % 10
    let h = Math.trunc(num / 100) % 10
    let i = Math.trunc(num / 1000) % 10
    let j = Math.trunc(num / 10000) % 10
    console.log("reverse number", f, g, h, i, j)
}
// reverse()

// //4.Any integer is input through the keyboard. Write a program to find out whether it
// //is an odd number or even number.

function evenodd() {
    const digit = Number(prompt("enter number"))
    console.log("enter a number", digit)
    if (isNaN(digit)) {
        return console.log("please enter a valid number")
    }
    if (digit % 2 == 0) {
        console.log(`${digit} is even`)
    }
    else {
        console.log(`${digit} is odd`)
    }
}
// } evenodd()

// //5.check if number if positive or negative


function positivenegative() {
    const numbr = Number(prompt("enter a number"))
    console.log("entered number", numbr)
    if (isNaN(numbr)) {
        return console.log("please enter a valid number")
    }
    if (numbr > 0) {
        console.log(`${numbr} is positive`)
    }
    else {
        console.log(`${numbr} is negative`)
    }
}
// positivenegative()


// //7.Any year is input through the keyboard. 'Write a program to determine whether
// //the year is a leap year or not. (Hint: Use the % (modulus) operator)

function years() {
    const year = Number(prompt("enter a year"))
    console.log("entered year", year)
    if (isNaN(year)) {
        return console.log("please enter a valid yaer")
    }
    if (year % 4 == 0) {
        console.log(`${year} is a leap year`)
    }
    else {
        console.log(`${year} is not leap year`)
    }
}
// // years()


// //8.If the ages of Ram, Shyam and Ajay are input through the keyboard, write a program
// //to determine the youngest of the three.

function younger() {
    const ram = Number(prompt("enter the age of ram"))
    const shyam = Number(prompt("enter the age of shyam"))
    const Ajay = Number(prompt("enter the age of Ajay"))
    console.log(`entred age ram ${ram},shyam ${shyam},Ajay ${Ajay}`)
    if (ram < shyam && ram < Ajay) {
        return console.log("ram is younger")
    }
    if (shyam < ram && shyam < Ajay) {
        return console.log("shyam is younger")
    }
    else {
        return console.log("Ajay is younger")
    }
}
younger()

// //9.Given the length and breadth of a rectangle, write a program to find whether the
// //area of the rectangle is greater than its perimeter. For example, the area of the
// //rectangle with length = 5 and breadth = 4 is greater than its perimeter.


function areaperimeter(length, breadth) {
    areaofrectangle = length * breadth;
    perimeter = 2 * (length + breadth)
    if (areaofrectangle > perimeter) {
        console.log("area of rectangle is graeter")
    }

    else if (areaofrectangle = perimeter) {
        console.log("area of rectangle is equal to perimeter")
    }

    else {
        console.log("perimter is graeter")
    }
} //areaperimeter(5, 4)

// //10.Write a program to check whether a triangle is valid or not, when the three angles
// //of the triangle are entered through the keyboard. A triangle is valid if the sum of
// //all the three angles is equal to 180 degrees

function triangle(side1, side2, side3) {
    sum = (side1 + side2 + side3)
    if (sum == 180) {
        console.log("traingle is valid")
    }
    else {
        console.log("triangle is not valid")
    }
}
//triangle(120, 30, 30)
//triangle(12, 30, 30)

// //11.If cost price and selling price of an item are input through the keyboard,
// //write a program to determine whether the seller has made profit or incurred loss.
// // Also determine how much profit he made or loss he incurred.

function profitloss() {
    const sellingprice = Number(prompt("enter selling price"))
    const costprice = Number(prompt("enter cost price"))
    console.log("enterd selling and cost price", sellingprice, costprice)
    if (sellingprice > costprice) {
        profit = sellingprice - costprice
        console.log(`we earn profit on selling item=${profit}`)
    }
    else if (sellingprice < costprice) {
        loss = costprice - sellingprice
        console.log(`we incured loss on selling item=${loss}`)
    }
    else {
        console.log("we have not profit and loss")
    }
}
//profitloss()


// //12.Write a program to find the absolute value of a number entered through the keyboard.

function number() {
    const num = Number(prompt("enter a positive negative number"))
    console.log("enterd a number", num)
    let a = Math.abs(num)
    console.log(`value of absoute number ${a}`)
}
// number()
// 13.If a four-digit number is input through the keyboard, write a program to obtain the 
//sum of the first and last digit of this number. (Hint: Use the modulus operator ‘%’)
function sumfirstandlast() {
    const digt = Number(prompt("enter a four digit number"))
    console.log("enterd number", digt)
    let k = Math.trunc(digt % 10)
    let l = Math.trunc(digt / 10) % 10
    let m = Math.trunc(digt / 100) % 10
    let n = Math.trunc(digt / 1000) % 10

    console.log("sumof digit", k, l, m, n)
    const firstandlastsum = k + n
    console.log("sum of first and last digit", firstandlastsum)
}
//  sumfirstandlast()

//14.The marks obtained by a student in 5 different subjects are input through the keyboard.
// The student gets a division as per the following rules:
// Percentage above or equal to 60 - First division
// Percentage between 50 and 59 - Second division
// Percentage between 40 and 49 - Third division
// Percentage less than 40 - Fail

function percentage() {
    const num1 = Number(prompt("enter a marks in first subject"))
    const num2 = Number(prompt("enter a marks in second subject"))
    const num3 = Number(prompt("enter a marks in third subject"))
    const num4 = Number(prompt("enter a marks in fourth subject"))
    const num5 = Number(prompt("enter a marks in fifth subject"))
    let subjectsum = num1 + num2 + num3 + num4 + num5;
    console.log("enterd number", subjectsum)
    let percentage = (subjectsum / 500) * 100
    console.log("percent of all subject", percentage)
    if (percentage >= 60) {
        return console.log("student secured first position")
    }
    if (percentage >= 50 && percentage <= 59) {
        return console.log("student secured second position")
    }
    if (percentage >= 40 && percentage <= 49) {
        return console.log("student secured third position")
    }
    else {
        return console.log("student has fail in all subject")
    }

}
// percentage()

//15.A five-digit number is entered through the keyboard. Write a program to obtain the 
//reversed number and to determine whether the original and reversed numbers are equal 
//or not. (Hint: Use the modulus operator ‘%’)

function reverse() {
    const num = Number(prompt("enter a five digit number"))
    console.log("enterd number", num)
    let f = Math.trunc(num % 10)
    let g = Math.trunc(num / 10) % 10
    let h = Math.trunc(num / 100) % 10
    let i = Math.trunc(num / 1000) % 10
    let j = Math.trunc(num / 10000) % 10
    rev = f * 10000 + g * 1000 + h * 100 + i * 10 + j * 1
    console.log("reverse number", rev)
    if (reverse == rev) {
        console.log("origanal and reverse value are equal")
    }
    else {
        console.log("not equal")
    }
}
reverse()

//16.-----------

// Gender	     Years of Service	      Qualifications	      Salary
// Male	           >=10	               Post-Graduate	      15000
// 		           >=10                 Graduate              10000
//                    <10             	   Post-Graduate          10000 
//                    <10                  Graduate	          7000
// --------	 ------------------	     ----------------	    --------
// female	           >=10	                Post-Graduate	      12000
//                    >=10	                  Graduate	          9000
//                    <10	                Post-Graduate	      10000
//                    <10	                  Graduate	          6000


function checkFitCandidate() {
    const gen = prompt("Enter Gender as M or F");
    const exp = Number(prompt("How much Experience do you have?"));
    const qual = prompt("Enter you qualification in PG or G");

    if (gen == "M" && exp >= 10 && qual == "PG") {
        return console.log(`Congrats, You are selected with 15000 rs`);
    } else if (gen == "M" && exp >= 10 && qual == "G") {
        return console.log(`Congrats, You are selected with 10000 rs`);
    } else if (gen == "M" && exp < 10 && qual == "PG") {
        return console.log(`Congrats, You are selected with 10000 rs -2`);
    } else if (gen == "M" && exp < 10 && qual == "G") {
        return console.log(`Congrats, You are selected with 7000 rs`);
    } else if (gen == "F" && exp >= 10 && qual == "PG") {
        return console.log(`Congrats Girl, You are selected with 12000 rs`);
    } else if (gen == "F" && exp >= 10 && qual == "G") {
        return console.log(`Congrats Girl, You are selected with 9000 rs`);
    } else if (gen == "F" && exp < 10 && qual == "PG") {
        return console.log(`Congrats Girl, You are selected with 10000 rs`);
    } else if (gen == "F" && exp < 10 && qual == "G") {
        return console.log(`Congrats Girl, You are selected with 6000 rs`);
    } else {
        return console.log(" you are not fit for this role");
    }
}
// checkFitCandidate();

// -17.-----> In a company an employee is paid as under: If his basic salary is less than Rs. 1500, 
//then HRA = 10% of basic salary and DA = 90% of basic salary. If his salary is either equal to or 
//above Rs. 1500, then HRA = Rs. 500 and DA = 98% of basic salary. If the employee's salary is input 
//through the keyboard write a program to find his gross salary.
function Salary() {
    const BS = Number(prompt("Enter the  basic salary"));

    console.log('Basic salary', BS)
    if (BS < 1500) {
        let HRA = (BS * 10) / 100;
        let DA = (BS * 90) / 100;
        let grossSalary = HRA + DA + BS;

        console.log(` gross salary ${grossSalary}  Basic salary less than  1500   `)
    }
    else if (BS >= 1500) {
        let HRA = 500;
        let DA = (BS * 98) / 100;
        let grossSalary = HRA + DA + BS;

        console.log(`gross salary ${grossSalary} Basic Salary more than and equal to  1500  `)
    }
    else {
        console.log("your are enter invalid detail")
    }
}
//Salary();
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`)
}
for (let i = 1000; i <= 5000; i++) {
    if (i % 4 == 0) {
        console.log("leap year", i)
    }
}