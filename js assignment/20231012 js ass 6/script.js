// 1. A certain grade of steel is graded according to the following conditions: 
// (i) Hardness must be greater than 50 (ii) Carbon content must be less than 0.7 
// (iii) Tensile strength must be greater than 5600
// The grades are as follows:

// Grade is 10 if all three conditions are met 
// Grade is 9 if conditions (i) and (ii) are met 
// Grade is 8 if conditions (ii) and (iii) are met 
// Grade is 7 if conditions (i) and (iii) are met 
// Grade is 6 if only one condition is met 
// Grade is 5 if none of the conditions are met

function grade() {
    const hardness = Number(prompt("enter the value of hardness"))
    const carbon = Number(prompt("enter the value of carbon"))
    const tensile = Number(prompt("enter the value of tensile"))
    console.log(`hardness=${hardness} , carbon=${carbon} , tensile=${tensile}`)
    if (hardness > 50 && carbon < 0.7 && tensile > 5600) {
        return console.log("grade is 10 all three condition is met")
    }
    else if (hardness > 50 && carbon < 0.7) {
        return console.log("grade is 9 (i)and(ii) condition is met")
    }
    else if (carbon < 0.7 && tensile > 5600) {
        return console.log("grade is 8 (ii)and(iii) condition is met")
    }
    else if (hardness > 50 && tensile > 5600) {
        return console.log("grade is 7 (i)and(iii) condition is met")
    }
    else if (hardness > 50 || carbon < 0.7 || tensile > 5600) {
        return console.log("grade is 6 only one condition is met ")
    }
    else {
        return console.log("grade is 6  none of the conditions are met")
    }
}
// grade()


//2.If the three sides of a triangle are entered through the keyboard, write a program
// to check whether the triangle is valid or not. The triangle is valid if the sum of 
//two sides is greater than the largest of the three sides.

function triangle() {
    const side1 = Number(prompt("enter the first side"))
    const side2 = Number(prompt("enter the second side"))
    const side3 = Number(prompt("enter the third side"))
    if (side1 < (side2 + side3) && side2 < (side3 + side1) && side3 < (side1 + side2)) {
        console.log("triangle is valid")
    }
    else {
        console.log("traingle is not valid")
    }
}
// triangle()

//4.If the three sides of a triangle are entered through the keyboard, write a program 
//to check whether the triangle is isosceles, equilateral, scalene or right angled triangle.

function provetriangle() {
    const sidea = Number(prompt("enter the first side"))
    const sideb = Number(prompt("enter the second side"))
    const sidec = Number(prompt("enter the third side"))
    if (sidea == sideb && sideb == sidec && sidec == sidea) {
        console.log("triangle is equilvalent")
    }
    else if (sidea == sideb || sideb == sidec || sidec == sidea) {
        console.log("triangle is isosceles")
    }
    else {
        console.log("triangle is scalene")
    }
}
provetriangle()