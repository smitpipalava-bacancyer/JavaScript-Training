// 1. Create a constant adminUser .
// 2. Create a type from it using typeof .
// 3. Add a new property and observe how the type changes automatically.

const adminUser = {
    id : 101,
    name : "SMIT",
    email : "abc@gmail.com",
    isActive : true,
    isPass : true
}


type newType = typeof adminUser;

const newPerson  : newType = {
    id:120,
    name : "JENISH",
    email : "def@gmail.com",
    isActive : false,
}