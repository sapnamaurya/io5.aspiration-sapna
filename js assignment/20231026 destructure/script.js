//Print all value using index values 
const array =
    [
        ["Sunday", "Monday", [-4, -3, 2, 3,
        ["this is string", "Sunny", false, null,
            [1, 2, "Shekhar", 4], "vinay1"],],
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Poonam"],
        "duck",
        "ant",
        "Cat",
        [
            ["abc", 4, ["Khushbu", 78457, false, null, [1, 2, "Ravana", 4], "Sapna"]],
            1, "Ritik", 5,],
    ];
console.log("--full array--", array)
console.log("--fisrt array--", array[0])
console.log("----sunday", array[0][0])
console.log("---monday", array[0][1])

console.log("==subarray1==", array[0][2])

console.log("==-4==", array[0][2][0])
console.log("==-3==", array[0][2][1])
console.log("==2==", array[0][2][2])
console.log("==3==", array[0][2][3])

console.log("==subarray2==", array[0][2][4])

console.log("--this is string--", array[0][2][4][0])
console.log("--sunny--", array[0][2][4][1])
console.log("==false==", array[0][2][4][2])
console.log("==null==", array[0][2][4][3])

console.log("==subarray3==", array[0][2][4][4])
console.log("==1==", array[0][2][4][4][0])
console.log("==2==", array[0][2][4][4][1])
console.log("--shekhar--", array[0][2][4][4][2])
console.log("==4==", array[0][2][4][4][3])
console.log("==vinay1==", array[0][2][4][5])
console.log("----tuesday", array[0][3])
console.log("---wednesday", array[0][4])
console.log("--thursday--", array[0][5])
console.log("--poonam--", array[0][6])

//end first array
console.log("---duck", array[1])
console.log("--ant--", array[2])
console.log("--cat--", array[3])

console.log("--second array--", array[4][0])

console.log("--abc--", array[4][0][0])
console.log("==4==", array[4][0][1])

console.log("==subarray1==", array[4][0][2])

console.log("--khusboo--", array[4][0][2][0])
console.log("--78457--", array[4][0][2][1])
console.log("--false--", array[4][0][2][2])
console.log("--null--", array[4][0][2][3])

console.log("--subarray2--", array[4][0][2][4])

console.log("--1--", array[4][0][2][4][0])
console.log("--2--", array[4][0][2][4][1])
console.log("--ravana--", array[4][0][2][4][2])
console.log("--4--", array[4][0][2][4][3])
console.log("--sapna--", array[4][0][2][5])

//Destructure following pokemons
//"Pikachu", "Bulbasour", "mew", "Charizard" "mewTwo" "Treecko", "Torchik", 
//"sharpido", "Squirtel", "Ditto" "Mr.Mime" "Blaziken"

const array2 =
    [["Sunday", "Monday", "Pikachu",
        ["Bulbasour", -4, -3, 2, 3,
            ["this is string", "Sunny", "mew", false, null, [1, 2, "Shekhar", "Charizard", 4],
                "vinay1",],], "mewTwo", "Tuesday", "Wednesday", "Thursday", "Poonam",],
        "duck",
        "ant",
        "Treecko",
        "Cat",
    [
        ["abc", 4, "Torchik",
            ["Khushbu", 78457, "sharpido", false, null, "Squirtel", ["Ditto", 1, 2, "Ravana", 4], "Sapna",],],
        "Mr.Mime", 1, "Ritik", 5,], "Blaziken",];
const [head] = array2 || []
const [, , piku,] = head
const [second] = array2
const [, , , bulba] = second
const [sur, , , , ,] = bulba
const [secondthird] = array2
const [, , , ...meo] = secondthird
const [...meoo] = meo
const [, meot, , ,] = meoo
console.log("--mewtwo--", meot)
console.log("--pikachu--", piku, sur, meot)

const [secondd] = array2
const [, , , bulbaa] = secondd
const [surr, , , , ,] = bulbaa
console.log("--bulbasur--", surr)

const [secondthirdd] = array2
const [, , , ...meoow] = secondthirdd
const [...meooo] = meoow
const [, meott, , ,] = meooo
console.log("--mewtwo--", meott)

