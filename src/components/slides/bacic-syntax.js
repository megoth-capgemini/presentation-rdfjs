var variable = null
variable = undefined

const constant = 42
constant = "Something" // not allowed
let anotherVariable = 'Something else' // initiate flame wars
anotherVariable = `Template string that allow interpolation: ${constant}`

var object = {} // new Object()
var array = [] // new Array()
var set = new Set()

function myFunction (variable) {
    return variable + 1
}
var anonymousFunction = function (variable) {
    return variable + 1
}
var arrowFunction = (variable) => variable + 1
