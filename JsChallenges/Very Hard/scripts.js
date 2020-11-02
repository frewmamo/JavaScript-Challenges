var num1 = prompt('First Number')
var operator = prompt ('Add+,Subtract-,Multiply*,Divide')
var num2 = prompt('Second Number')

var num1 = parseInt(num1)
var num2 = parseInt(num2)
function add() {
    var added = num1 + num2
    console.log (`${num1} + ${num2} = ${added}`)
}

function Subtract() {
    var subtracted = num1 - num2
    console.log (`${num1} - ${num2} = ${subtracted}`)
}
function Multiply() {
    var multiplied = num1 * num2
    console.log (`${num1} * ${num2} = ${multiplied}`)
}
function Divide() {
    var divided = num1 / num2
    console.log (`${num1} / ${num2} = ${divided}`)
}

if (operator ===  "+" ) {
    add ()
} else if (operator === "-" ) {
    Subtract ()
} else if (operator === "*" ) {
    Multiply ()
}else if (operator === "/" ) {
    Divide ()
}