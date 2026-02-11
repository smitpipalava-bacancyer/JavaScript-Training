// Assignment 6: Interfaces
// 1. Create Admin and Customer interfaces using a common base
// 2. Extend the base interface to add role-specific properties
// 3. Write a function that accepts BaseUser
// 4. Pass both Admin and Customer objects to the function
// 5. Design an interface for an API response object
// 6. Create a function that accepts this interface as a parameter
// 7. Extend the interface and reuse it
// 8. Create an interface for a Product
// 9. Create a variable that follows this interface
// 10. Why are interfaces preferred in large projects?

// 1. Create Admin and Customer interfaces using a common base
interface baseUser {
    name : string,
    age : number
}

interface Admin extends baseUser{
    AdminId : number
}

interface Customer extends baseUser{
    CustomerId : number
}

// 2. Extend the base interface to add role-specific properties
interface Employee extends baseUser{
    role : string[]
}

// 3. Write a function that accepts BaseUser
function print(user : baseUser){
    console.log(user.name);
}

// 4. Pass both Admin and Customer objects to the function
const c1 : Customer = {
    name : "Niken",
    age : 24,
    CustomerId : 101
}
print(c1);

// 5. Design an interface for an API response object
interface APIObject {
    status : number,
    message : string,
    data : unknown,
    error ?: string
}

// 6. Create a function that accepts this interface as a parameter

function printAPIResponse(data : APIObject){
    console.log(data);
}
// 7. Extend the interface and reuse it

interface userAPI extends APIObject{
    data : baseUser[];
}

// 8. Create an interface for a Product

interface productI {
    productId : number,
    productName : string,
    productPrice : number
}

const p1 : productI = {
    productId : 101,
    productName : "Shampoo",
    productPrice : 1050
}

// 9. Create a variable that follows this interface
console.log(p1);

// 10. Why are interfaces preferred in large projects?
// because in large object we don't know what the user will add in object property so for that we need one proper structure .. now there will be lot of strcuture for many objects.. so to do manually for every object we just use interface where all the type will be there and then we apply it on the objects....