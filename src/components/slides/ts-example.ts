const number: number = 42;
const string: string = "Something"

type MyType = {
    id: number
}
const entity: MyType = {id: 42};

interface MyInterface {
    entity: MyType
}
const anotherEntity: MyInterface = {entity}

const addOne = (num: number): number => num + 1