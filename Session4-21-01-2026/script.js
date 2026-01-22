/*      ****    Exercise - 1    ****         */
// Predict the output and explain the memory state.

const registry = {
    active: [{ id: 1, name: "Alpha" }],
    archived: []
};
function cloneAndModify(data) {
    // Goal: Create a copy so the original registry isn't changed 
    const copy = { ...data };
    copy.active.push({ id: 2, name: "Beta" });
    copy.active[0].name = "Gamma";
    copy.version = 2.0;
    return copy;
}
const newRegistry = cloneAndModify(registry);
console.log(registry.active.length); // ? 
console.log(registry.active[0].name); // ? 
console.log(registry.version); // ? 

/*
output
2
Gamma
undefined

Reason :- in cloneAndModify function we create an shallow copy of the data and in data we pass the registry.
now in the registry there is an array of object and in cloneAndModify function we push another object in copy (shallow copy of data)
and also try to change the first object's name property but it is a shallow copy it points to the original data's memory location for objects and nested objects.
so it also change the name propertu in registry too... also we added one more property in copy (shallow copy of data) but it can't be reflect to the original registry becuase it is primitve value and it will not point to the original object and it can't also added.

*/




/*      ****    Exercise - 2    ****         */
// Identify why the following code throws an error and fix it without using the class keyword.

function Animal(name) {
    this.name = name;
}
Animal.prototype.eat = function () {
    console.log(`${this.name} is eating.`);
};
function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}
// Intent: Dog should inherit from Animal 
Dog.prototype = Animal.prototype;
Dog.prototype.bark = function () {
    console.log("Woof!");
};
const myDog = new Dog("Buddy", "Golden");
const genericAnimal = new Animal("Generic");
genericAnimal.bark(); // Why does this happen? 
console.log(myDog.constructor.name); // Why is this 'Animal' and not 'Dog'? 





/*      ****    Exercise - 3    ****         */
//  Predict the result of the following execution.


function SmartPhone(brand) {
    this.brand = brand;
    return {
        brand: "Generic",
        os: "Android"
    };
}
SmartPhone.prototype.getBrand = function () {
    return this.brand;
};
const myPhone = new SmartPhone("Apple");
console.log(myPhone.brand); // ? 
console.log(myPhone.getBrand); // ? 

/*

Generic
undefined


Reason :- becuase in SmartPhone(brand) whatever comes as a parameter it doesn't change anything in object it always return the static value of the object like  brand will be "Generic" and becuase of it myPhone's prototype becomes Object's protoype and this.brand becomes undefined ....

*/


/*      ****    Exercise - 4    ****         */
// Write a function called masterClone(obj) that performs a deep copy without using JSON.stringify or structuredClone.





// 5. Trace the execution of this class logic. 
class Counter {
    static count = 0;
    count = 10;
    constructor() {
        Counter.count++;
    }
    getCount() {
        return this.count;
    }
    static getStaticCount() {
        return this.count;
    }
}
const c1 = new Counter();
const c2 = new Counter();
console.log(c1.getCount());
// ? 
console.log(Counter.getStaticCount()); // ? 
console.log(c1.getStaticCount());  // ?

