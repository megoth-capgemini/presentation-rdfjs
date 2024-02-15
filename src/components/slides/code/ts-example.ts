const number: number = 42;
let string = "Something" // TS will infer type
string = "Something else" // allowed
string = 1337 // not allowed

type MyType = {
    id: number
}
const entity: MyType = {id: 42};

interface MyInterface {
    entity: MyType
}
const anotherEntity: MyInterface = {entity}

const addOne = (num: number): number => num + 1