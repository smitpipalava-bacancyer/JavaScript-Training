// 1. Create a function activateUser that accepts only objects having isActive: boolean
// 2. Create another function that requires both id and email .
// 3. Try passing invalid objects and observe TypeScript errors.

type objType = {
    isActive : boolean,
    name : string,
    id : number,
    email : string
}

type objWithoutBoolean = Omit<objType , "isActive">;
type objWithoutId = Omit<objType , "id">;


const obj1 : objType = {
    isActive : true,
    name : "SMIT",
    id : 101,
    email : "abc@gmail.com"
}

const obj2 : objWithoutBoolean = {
    name : "JENISH",
    id : 102,
    email : "def@gmail.com"
}

const obj3 : objWithoutId = {
    isActive : false,
    name : "vishw",
    email : "ghi@gmail.com"
}

function activateUser<T extends { isActive : boolean}>(obj : T){
    console.log(obj);
}

function acceptsBoth<T extends {id : number ; email : string}>(obj : T){
    console.log(obj);
}


activateUser(obj1);
activateUser(obj2);
activateUser(obj3);
acceptsBoth(obj1);
acceptsBoth(obj2);
acceptsBoth(obj3);
