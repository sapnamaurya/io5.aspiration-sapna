//1. enter length breadth of rectangle and find the area, perimeter.
function areaperimeter() {
    const length = Number(prompt("enter a length of rectangle"))
    const breadth = Number(prompt("enter a breadth of rectangle"))
    const areaofrectangle = length * breadth
    console.log(`length=${length} and breadth=${breadth} of reantangle and its area of rectangle = ${areaofrectangle}`)
    const perimterofrectangle = 2 * (length + breadth)
    console.log(`length=${length} and breadth=${breadth} of rectangle and its perimter of rectangle = ${perimterofrectangle}`)
}
// areaperimeter()


//2. Enter the radius of Circle and find the circumstance and area of circle

function areaperimeterofcircle() {
    const r = Number(prompt("enter radius of cirle"))
    console.log("area of circle", Math.trunc(Math.PI * r * r))
    console.log("perimter of circle", Math.trunc(2 * Math.PI * r))
}
//areaperimeterofcircle()

//3.Enter the marks of 5 subject of student and find the aggregate(average) and percentage of all.
//Mark should not be greater than 100. 
// Formula aggregate = totalMarks / number of subjects
// Formula Percentage = (obtained marks / Total marks) * 100

function marks() {
    let sub1 = Number(prompt("enter the marks of first subject"))
    let sub2 = Number(prompt("enter the marks of second subject"))
    let sub3 = Number(prompt("enter the marks of third subject"))
    let sub4 = Number(prompt("enter the marks of fourth subject"))
    let sub5 = Number(prompt("enter the marks of fifth subject"))
    let obtainedmarks = (sub1 + sub2 + sub3 + sub4 + sub5)
    let averagemarks = obtainedmarks / 5
    console.log(`average of sub1 ${sub1}, sub2 =${sub2} , sub3=${sub3}, sub4=${sub4} , sub5=${sub5}is ${averagemarks}`)
    let percentage = (obtainedmarks / 500) * 100
    console.log(`percentage of sub1 ${sub1} sub2 =${sub2}  sub3=${sub3} sub4=${sub4}  sub5=${sub5}is ${percentage}`)
}
// marks()

//3.Ramesh's basic salary is input through the keyboard.
//His dearness allowance is 40% of basic salary,
//and house rent allowance is 20% of basic salary.
//Write a program to calculate his gross salary
//  => Formula for Gross salary : Salary +  DA + RA

function salary() {
    const rameshsalary = Number(prompt("enter a ramesh basic salary"))
    const dearnessallowance = (rameshsalary * 40) / 100
    const houserentallowance = (rameshsalary * 20) / 100
    const grosssalary = dearnessallowance + houserentallowance + rameshsalary
    console.log(`${rameshsalary} of gross salary is ${grosssalary}`)
}
//salary()

//5.temperature of a city in fahrenheit degrees is input through the keyboard.
//write a program to convert the temperature into centigrade and centigrade to Fahrenheit
// Celsius to Fahrenheit: (9/5 × °C) + 32
// Fahrenheit to Celsius: 5/9(°F - 32)
// Kelvin to Celsius: K - 273

function temperature() {
    const fahrenheit = Number(prompt("enter the temperature in fahrenheit"))
    const celsius = Number(prompt("enter the temperature in celsius"))
    const kelvin = Number(prompt("enter the temperature in kelvin"))
    const CelsiustoFahrenheit = (9 / 5) * celsius + 32
    console.log("temprature calculate in Celsius to Fahrenheit", CelsiustoFahrenheit)
    const FahrenheittoCelsius = (fahrenheit - 32 * 5) / 9
    console.log("temprature calculate in  Fahrenheit to Celsius", FahrenheittoCelsius)
    const KelvintoCelsius = kelvin - 273
    console.log("temprature calculate in kelvin to Celsius", KelvintoCelsius)
}
// temperature()

//6.The distance between two cities (in km) entered through key board.
//write a program to calculate distance in meters, feet and centimeter

// Formula to calculate feet from km === km * 3280.84
// formula to calculate inch from km == 1ft * 12inch * km
// formula to calculate km to mtr == km(1) * mtr(1000) * cm(100)

function distancebetweentwocities() {
    const km = Number(prompt("enter the distance between two cities"))
    let ft = 3280.84
    let feetfromkm = km * ft
    console.log("calculate feet from km", feetfromkm)
    let mtr = 1000
    let cm = 100
    let kmtomtr = km * mtr * cm
    console.log("calculate km to mtr", kmtomtr)
} distancebetweentwocities()