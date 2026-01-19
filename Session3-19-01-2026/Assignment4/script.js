// Exercise 7

// Reason :- 


// correct code to print Hello, Alex
console.log("\n");
console.log("   **** EXERCISE 7 OUTPUT ****    ")
const user = {
    name: "Alex",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};
user.greet();
console.log("\n");


// Exercise 8
const settings = { theme: "light", notifications: true };

const newSettings = { ...settings};

newSettings.theme = "dark";

console.log("\n");
console.log("   **** EXERCISE 8 OUTPUT ****    ")
console.log(settings.theme);
console.log(newSettings.theme);
console.log("\n");

// Exercise 9
const inventory = [
    { name: "Laptop", price: 1000, stock: 5 },
    { name: "Phone", price: 500, stock: 0 },
    { name: "Mouse", price: 50, stock: 10 }
];

const RemainItem = inventory.filter((item)=>{
    return item.stock != 0;
}).map((value)=>{
    return value.price*value.stock;
}).reduce((acc,curr)=>{
    return acc += curr;
},0);

console.log("\n");
console.log("   **** EXERCISE 9 OUTPUT ****    ");
console.log(RemainItem);
console.log("\n");