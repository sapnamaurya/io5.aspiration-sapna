// //1.Five numbers are entered from the keyboard into an array. 
// //Write a program to find out how many of them are positive, 
// //how many are negative, how many are even and how many odd.

// // const num1 = Number[prompt("enter a first number"))
// // const num2 = Number(prompt("enter a second number"))
// // const num3 = Number(prompt("enter a third number"))
// // const num4 = Number(prompt("enter a forth number"))
// // const num5 = Number(prompt("enter a fifth number"))
// // const arr11 = [num1, num2, num3, num4, num5]
// // console.log("array", arr11)
// // const even = []
// // const odd = []
// // const positive = []
// // const negative = []
// // for (i = 0; i < arr11.length; i++) {
// //     console.log(`-----${i}--------`, arr11[i])

// //     if (arr11[i] > 0) {
// //         positive.push(arr11[i])
// //     }
// //     else if (arr11[i] < 0) {
// //         negative.push(arr11[i])
// //     }
// //     else if (arr11[i] % 2 == 0) {
// //         even.push(arr11[i])
// //     } else {
// //         odd.push(arr11[i])
// //     }
// // }
// // console.log("positive", positive)
// // console.log("negative", negative)
// // console.log("even", even)
// // console.log("odd", odd)

// //2.Write a program to copy the contents of one array into another in the reverse
// //order (with prototype) arr1 = [1,2,3,4] newArr = [4,3,2,1]
// const arr = [1, 2, 3, 4, 5]
// console.log("arrary", arr)
// const reversed = arr.reverse();
// console.log("reversed", reversed)

// 3
// //3.Reverse array without using prototypes [4,8,9,2] to [2,9,8,4]

// const arr2 = [4, 8, 9, 2]
// const rev = []
// for (let i = 1; i <= arr2.length; i++) {
//     let val = arr2[arr2.length - i]
//     rev.push(val);
// }
// console.log("reverse a number", rev)

// //4.Write a simple JavaScript program to join all elements of the following
// //array into a string. Sample array : myColor = ["Red", "Green", "White", "Black"];
// //Expected Output : "Red,Green,White,Black" "Red,Green,White,Black" "Red+Green+White+Black"

// const mycolor = ["Red", "Green", "White", "Black"];
// console.log("join the elements", mycolor.join())
// console.log("join the elements", mycolor.join(' + '))

// //5.Write a JavaScript program to find the most frequent item in an array. Sample array :
// // var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]; Sample Output : a ( 5 times )

// const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
// const withdupes = [...new Set(arr1)]
// console.log("dupletes", withdupes)

// cons

// //6.Write a JavaScript function to find an array containing a specific element. Test data : 
// //arr = [2, 5, 9, 6]; console.log(contains(arr, 5)); [True]

// const arrary = [2, 5, 9, 6]
// const finded = arr.find((element, index) => element == 5)
// console.log("find number", finded)

// //7.Write a JavaScript function to get the largest element from an unsorted array. Test Data :
// // console.log( largest([ 43, 56, 23, 189, 88, 90, 99, 52]));


const array = [
    [
        "Sunday",
        "Monday",
        [
            -4,
            -3,
            2,
            3,
            ["this is string", "Sunny", false, null, [1, 2, "Shekhar", 4], "vinay1"],
        ],
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Poonam",
    ],
    "duck",
    "ant",
    "Cat",
    [
        ["abc", 4, ["Khushbu", 78457, false, null, [1, 2, 'ravan', 4], "Sapna"]],
        1,
        "Ritik",
        5,
    ],
];
console.log("---->", array[4][0][2][5])
console.log("---->", array[4][2])
console.log("---->", array[0][6])
console.log("---->", array[4][0][2][0])
console.log("---->", array[0][2][4][4][2])
console.log("---->", array[0][2][4][1])
console.log("---->", array[4][0][2][4][2])