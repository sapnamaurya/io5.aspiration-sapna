// *****
// *****
// *****
// *****
// *****
for (i = 1; i <= 5; i++) {
    for (j = 1; j <= 5; j++) {
        document.write("* ")
    }
    document.write("<br />")
}

document.write("<br/> <br/>")
//*
//**
//***
//****
//*****
for (i = 1; i <= 5; i++) {
    for (j = 1; j <= i; j++) {
        document.write("* ")
    }
    document.write("<br />")
}

document.write("<br/> <br/>")
//*****
//****
//***
//**
//* 
for (i = 1; i <= 5; i++) {
    for (j = 1; j <= 5; j++) {
        if (j <= 6 - i)
            document.write("* ")
    }
    document.write("<br />")
} document.write("<br/> <br/>")
for (i = 1; i <= 5; i++) {
    for (j = 1; j <= 10; j++) {
        if (j <= 6 - i || j <= 9 + i)
            document.write("* ")
    } document.write(" <br/> ")

}



function factorial(n) {

    let answer = 1;
    if (n == 0 || n == 1) {
        return answer;
    }
    else if (n > 1) {
        for (var i = n; i >= 1; i--) {
            answer = answer * i;
        }
        return answer;
    }
    else {
        return "number has to be positive."
    }

}
const n = Number(prompt("enter a number"));
answer = factorial(n)

console.log("Factorial of " + n + " : " + answer);

// const shorts = []
// const str = ["if", "we", "remove", "space", "from", "the", "answer", "s", "approch"]
// for (i = 0; i <= str.length; i++)
//     console.log("${i}", str[i])
// if (str[i].length <= 3) {
//     Shorts.push(str[i])
// } console.log("print", shorts)
const days = ['Friday',
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Wednesday',
    'Wednesday',
    'Friday',
    'Friday',]
const withoutdupes = [...new Set(days)]
console.log("withoutdupes=", withoutdupes)