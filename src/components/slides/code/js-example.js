var variable
variable = null
variable = undefined

const constant = 42
constant = "Something"
let anotherVariable = 'Something else'
anotherVariable = `Template string that allow interpolation: ${constant}`

const object = {foo: 42}
object.bar = "Thank you for the fish"
const array = [42, 42, "Thank you for all the fish"]
array[0] = 1337
const set = new Set([42, 42, "Thank you for all the fish"])

function myFunction(variable) {
    return variable + 1
}
const result = myFunction(42)
const arrowFunction = (variable) => variable + 1
const result2 = arrowFunction(1337)