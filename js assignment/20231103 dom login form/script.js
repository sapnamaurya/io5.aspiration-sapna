const body = document.querySelector("body")
const div = document.createElement("div")
div.setAttribute("class", "border")
console.log("--", div)
const div1 = document.createElement("div1")
div1.setAttribute("class", "logo-cont")
console.log("--", div1)
const h2 = document.createElement("h2")

h2.innerText = "My Company"
console.log("--", h2)
const div2 = document.createElement("div2")
const div3 = document.createElement("div3")
div3.setAttribute("class", "back")
console.log("--", div3)
let p1 = document.createElement("p")
p1.setAttribute("class", "content")
p1.innerText = " Sign UP Of Your Newsletter"
console.log("--", p1)
let p = document.createElement("p")
p.setAttribute("class", "content1")

p.innerText = " Fill out your information below to be signed up for our informative newsletter."
console.log("--", p)

console.log("--", div2)
const form = document.createElement("form")
console.log("--", form)
const div4 = document.createElement("div4")
// div4.style.display = " flex"
console.log("--", div4)
const div5 = document.createElement("div5")
console.log("--", div5)
const label = document.createElement("label")

label.innerText = "First Name"
console.log("--", label)
const input = document.createElement("input")
input.setAttribute("class", "inp1")
console.log("--", input)

const label1 = document.createElement("label1")

label1.innerText = "Last Name"
console.log("--", label1)
const input1 = document.createElement("input")
input1.setAttribute("class", "inp1")
console.log("--", input1)
const label2 = document.createElement("label")

label2.innerText = "Email"
console.log("---", label2)
const input2 = document.createElement("input")
input2.setAttribute("class", "inp2")
console.log("---", input2)
const label3 = document.createElement("label")

label3.innerText = "Company"
console.log("---", label3)
const input3 = document.createElement("input")
input3.setAttribute("class", "inp3")
console.log("---", input3)
const p2 = document.createElement("p")

p2.innerText = "Add me to your mailing list"
console.log("---", p2)
const input4 = document.createElement("input")
input4.setAttribute("class", "box")
input4.setAttribute("type", "checkbox")
console.log("---", input4)
const label4 = document.createElement("label")

label4.innerText = "I agree to receive e-mail from your company and your terms and conditions"
console.log("---", label4)
const button = document.createElement("button")
button.setAttribute("class", "btn")
button.setAttribute("type", "checkbox")
console.log("---", button)

const label5 = document.createElement("label")

label5.innerText = "Sign Me Up"
console.log("---", label5)

body.appendChild(div)
div.appendChild(div1)
div1.appendChild(h2)
div.appendChild(div2)
div3.appendChild(p1)
div3.appendChild(p)
div2.appendChild(div3)
div.appendChild(form)
form.appendChild(div4)
div4.appendChild(div5)
div5.appendChild(label)
div5.appendChild(input)
div5.appendChild(label1)
div5.appendChild(input1)
div5.appendChild(label2)
div5.appendChild(input2)
div5.appendChild(label3)
div5.appendChild(input3)
div5.appendChild(p2)
div5.appendChild(input4)
div5.appendChild(label4)
div5.appendChild(button)
button.appendChild(label5)