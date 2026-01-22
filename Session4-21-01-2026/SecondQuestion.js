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


/* Reason behind it :- 

at the line number 50 there is one sentence that Dog should inherit from Animal but in the line 51 it is prototype refering that mean dog is not inheriting the Animal prototype it gives referencing to Animal prototype so after it Dog prototype will be discarded and Animal Prototype applies to the instances which are created by Dog function...


so to inherit the Animal prototype we have to use Object.create() method and in this method we have to pass the Animal.prototype like that 

Dog.prototype = Object.create(Animal.Prototype);        //by this way now Dog inherit the Animal prototype.


now in the line number 57
genericAnimal is object of Animal though it runs the bark method because after line number 51 both (Animal and Dog) prototype mixes up and refer to the same one prototype and in this prototype there is bark method and eat method also..

now in the line number 58 
myDog.constructor.name it shows Animal not dog though it is the Dog instance. Because of the line number 51 it change the constructor of Dog prototype and it's instances..
*/