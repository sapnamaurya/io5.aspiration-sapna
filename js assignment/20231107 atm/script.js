let amount = 10000;
let pin = 1234;

const withdrawamount = () => {
    console.log("withdraw clicked")
}

const depoistamount = () => {
    console.log("depoist clicked")
}

const transferamount = () => {
    console.log("transfer clicked")
}

const balanceenquiry = () => {
    console.log("balanceenquiry clicked")
}

const changepin = () => {
    console.log("changepin clicked")
}

const exit = () => {
    console.log("exit clicked")
}
const getpin = () => {
    const oldPin = document.querySelector("#old-pin")
    const newPin = document.querySelector("#new-pin")
    const [pincontainer] = document.getElementsByClassName("pin-container")
    console.log("oldpin", oldPin.value)
    console.log(" new pin", newPin.value)
    console.log("pin==oldpin", pin == Number(oldPin.value))
    console.log("  pin == Number(oldPin.value)", pin, Number(oldPin.value))
    const html = document.createElement("div")
    if (pin == Number(oldPin.value)) {
        html.innerHTML = `<h3 style="color:white;border:1px solid black;">Pin has been matched.You can change your pin now.</h3>`
        pincontainer.append(html)
    }
    else {
        html.innerHTML = `<h3 style="color:white;border:1px solid black;">Pin has not been matched.Please try again.</h3>`
        pincontainer.append(html)
    }

}


