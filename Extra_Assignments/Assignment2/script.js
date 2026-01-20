/*  ****    Exercise 1  ****  */
/*Create a function that:
accepts an array
filters numbers greater than 10
doubles them using map*/

const NumArray = [10,20,30,40,50,60,70,80,90,100];

const First = function(a){
    const BigNum = a.filter((value)=>{return value >= 10});
    console.log(BigNum.map((value)=>{ return value*2}));
}

First(NumArray);

/*  ****    Exercise 2  ****  */
// Given an array of prices, calculate total price using reduce().

const NumArray2 = [5,10,25,36,79,25,10,13,15.60];

console.log("SO THE TOTAL PRICE IS: "+NumArray2.reduce((acc,curr)=>{
    return acc += curr;
},0))

/*  ****    Exercise 3  ****  */
// Create a program that converts:
// "JavaScript Is Fun" → "javascript-is-fun"

const text = "JavaScript Is Fun";

console.log(text.toLowerCase().split(/\s/).join("-"));


/*  ****    Exercise 4  ****  */
// Given an array of objects {name, marks}, filter students with marks > 60.

const students = [
  { name: "Amit", marks: 75 },
  { name: "Neha", marks: 58 },
  { name: "Rahul", marks: 82 },
  { name: "Priya", marks: 60 },
  { name: "Karan", marks: 90 },
  { name: "Sneha", marks: 45 }
];


console.log(students.filter((value)=>{
    return value.marks > 60;
}))

/*  ****    Exercise 5  ****  */
// Create a shallow copy of an object and update one property without affecting original.

const person1 = {
    name : "SMIT Pipalava",
    address : "Thakkarbapanagar",
    company : "Bacancy"
}

const person2 = { ...person1};

person2.company = "Bacancy2";
person2.name = "Vishw";

console.log(person1);
console.log(person2);