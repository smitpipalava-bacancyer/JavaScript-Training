// Assignment 3: Union Types
// 1. Add one more role (e.g. Guest ) to the User union
// 2. Write a function that accepts User
// 3. Use the role field to safely narrow the type
// 4. Observe how TypeScript prevents invalid property access
// 5. Create a union type for two different user roles using type
// 6. Create another union using two interfaces
// 7. Write a function that accepts the union and narrows the type safely

type Customer = {
    role: "Customer",
    Ids: number[]
}

type admin = {
    role: "admin",
    permissions: string[]
}

type guest = {
    role: "guest",
    permissions: string[]
}

type User = Customer | admin | guest;

let c1: Customer = {
    role: "Customer",
    Ids: [101, 102, 103]
}

let a1: admin = {
    role: "admin",
    permissions: ["edit", "update", "delete"]
}

let g1: guest = {
    role: "guest",
    permissions: ["read"]
}

// function check(person : User){
//     console.log(person.permissions);
// }

function check(person: User) {
    if (person.role === "admin") {
        console.log(person.permissions);
    }
    else if (person.role === "guest") {
        console.log(person.permissions);
    }
    else {
        console.log(person.Ids);
        // console.log(person.permissions);
    }
}

// check(g1);
check(a1);

interface AdminI {
    role: "Admin",
    permissions: string[]
}

interface GuestI {
    role: "Guest",
    permissions: string[]
}

interface CustomerI {
    role: "Customer",
    permissions: number[]
}

type UserI = AdminI | GuestI | CustomerI;

let AI1: UserI = {
    role: "Admin",
    permissions: ["edit", "update", "delete"]
}

let CI1: CustomerI = {
    role: "Customer",
    permissions: [101, 102, 103]
}

let GI1: GuestI = {
    role: "Guest",
    permissions: ["read"]
}

function checkUser(user: UserI) {
    if (user.role === "Admin") {
        console.log(user.permissions); // string[]
    }
    else if (user.role === "Guest") {
        console.log(user.permissions); // string[]
    }
    else {
        console.log(user.permissions); // number[]
    }
}

checkUser(AI1);