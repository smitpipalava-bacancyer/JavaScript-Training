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

