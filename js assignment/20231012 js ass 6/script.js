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
    const sum = side1 + side2 + side3;
    const sum1 = side1 + side2
    const sum2 = side2 + side3
    const sum3 = side3 + side1
    if (sum == 180) {
        console.log("triangle is valid")
    }
    else if (sum1 > side1 || sum2 > side2 || sum3 > side3) {
        console.log("sum of two sides is greater than the largest of the three sides")
    }
    else {
        console.log("traingle is not valid")
    }
}
triangle()

//4.If the three sides of a triangle are entered through the keyboard, write a program 
//to check whether the triangle is isosceles, equilateral, scalene or right angled triangle.

function provetriangle() {
    const sidea = Number(prompt("enter the first side"))
    const sideb = Number(prompt("enter the second side"))
    const sidec = Number(prompt("enter the third side"))
    if (sidea == sideb && sideb == sidec && sidec == sidea) {
        console.log("triangle is equilvalent")
    }
    else
        if (sidea == sideb || sideb == sidec || sidec == sidea) {
            console.log("triangle is isosceles")
        }
        else {
            console.log("triangle is scalene")
        }
}
// provetriangle()


//4.An Insurance company follows following rules to calculate premium.
//(1) If a person’s health is excellent and the person is between 25 and 35 years 
//of age and lives in a city and is a male then the premium is Rs. 4 per thousand 
//and his policy amount cannot exceed Rs. 2 lakhs. (2) If a person satisfies all 
//the above conditions except that the sex is female then the premium is Rs. 3 per 
//thousand and her policy amount cannot exceed Rs. 1 lakh. (3) If a person’s health
// is poor and the person is between 25 and 35 years of age and lives in a village 
//and is a male 90 Let Us C then the premium is Rs. 6 per thousand and his policy 
//cannot exceed Rs. 10,000. (4) In all other cases the person is not insured.

//Write a program to output whether the person should be insured or not, his/her 
//premium rate and maximum amount for which he/she can be insured.

function premium() {
    const age = Number(prompt("enter the age of person"))
    const gen = prompt("enter the gender")
    const policyamount = Number(prompt("enter the policy amount"))
    const place = prompt("enter the city or village")
    if (age >= 25 && age <= 35 && gen == 'M' && policyamount <= 100000 && place == "city") {
        console.log("person health is excelent anf his premium is RS.4 per thousand")
    }
    else if (age >= 25 && age <= 35 && gen == 'F' && policyamount <= 100000 && place == "city") {
        console.log("person health is excelent and his premium is RS. 3 per thousand")
    }
    else if (age >= 25 && age <= 35 && gen == 'M' && policyamount < 10000 && place == "village") {
        console.log("person health is poor anf his premium is RS.6per thousand")
    }
    else {
        console.log("all other cases the person is not insured")
    }
}
// premium()

//5.A library charges a fine for every book returned late. For first 5 days the fine
// is 50 paise, for 6-10 days fine is one rupee and above 10 days fine is 5 rupees. 
//If you return the book after 30 days your membership will be cancelled. Write a 
//program to accept the number of days the member is late to return the book and 
//display the fine or the appropriate message.

function fine() {
    const days = Number(prompt("enter the day in number"))
    console.log("enter the value of days in number")
    if (days >= 0 && days <= 5) {
        console.log("a library charges a fine is 50 paise ")
    }
    if (days >= 6 && days <= 10) {
        console.log("a library charges a fine is 1 rupee")
    }
    if (days >= 10 && days <= 30) {
        console.log("a library charges a fine is 5 rupees")
    }
    else {
        console.log("membership will be cancelled")
    }
}
//fine()


//6.In a company, worker efficiency is determined on the basis of the time required
// for a worker to complete a particular job. If the time taken by the worker is 
//between 2 – 3 hours, then the worker is said to be highly efficient. If the time
// required by the worker is between 3 – 4 hours, then the worker is ordered to 
//improve speed. If the time taken is between 4 – 5 hours, the worker is given 
//training to improve his speed, and if the time taken by the worker is more than 5 
//hours, then the worker has to leave the company. If the time taken by the worker is
// input through the keyboard, find the efficiency of the worker.


function workerefficiency() {
    const timeperiod = Number(prompt("enter the time taken by the worker"))
    if (timeperiod >= 2 && timeperiod <= 3) {
        return console.log("the worker is to be highly efficient")
    }
    if (timeperiod >= 3 && timeperiod <= 4) {
        return console.log(" the worker is ordered to improved speed")
    }
    if (timeperiod >= 4 && timeperiod <= 5) {
        return console.log(" the worker is given training to improve his speed")
    }
    else {
        return console.log("the worker has to leave the company")
    }
}
//workerefficiency()