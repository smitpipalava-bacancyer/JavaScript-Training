/*  ****    Exercise 1  ****  */
// Given an array of orders {price, quantity}, calculate total revenue using map + reduce.

const orders = [
  { price: 250, quantity: 2 },
  { price: 120, quantity: 5 }, 
  { price: 500, quantity: 1 }, 
  { price: 80,  quantity: 10 },
  { price: 300, quantity: 3 }
];


console.log("SO THE REVENUE IS :"+orders.map((value)=>{
    return value.price*value.quantity;
}).reduce((acc,curr)=>{
    return acc += curr;
},0));


/*  ****    Exercise 2  ****  */
// Create a function that accepts a sentence and returns word count object.

const text = "JavaScript is fun and JavaScript is powerful";

const arrOfText = text.split(/\s/);


const wordCount = arrOfText.reduce((acc,curr)=>{
        if(acc[curr]){
            acc[curr]+=1;
        }
        else{
            acc[curr]=1;
        }
        return acc;
    },{});

console.log(wordCount);

// why this is also not working ?? => when we write the result in ``?

// why this is not working???
// console.log("{"+
//     arrOfText.reduce((acc,curr)=>{
//         if(acc[curr]){
//             acc[curr]+=1;
//         }
//         else{
//             acc[curr]=1;
//         }
//         return acc;
//     },{})
//     +"}")
/*
  javascript: 2,
  is: 2,
  fun: 1,
  and: 1,
  powerful: 1

*/


/*  ****    Exercise 3  ****  */
// Filter valid users from array where isActive === true and return their names.

const users = [
  { name: "Amit", isActive: true },
  { name: "Neha", isActive: false },
  { name: "Rahul", isActive: true },
  { name: "Priya", isActive: false },
  { name: "Karan", isActive: true },
  { name: "Sneha", isActive: true }
];


const result = users.filter((value)=>{
    return value.isActive == true;
});

console.log(result);
// console.log(`SO THE VALID USERS ARE : ${result}`);

// console.log("SO THE VALID USERS ARE :"+ users.filter((value)=>{
//     return value.isActive == true;
// }))



/*  ****    Exercise 4  ****  */
// Demonstrate shallow copy issue using nested object.

const person1 = {
    name : {
        firstname : "Patel",
        middlename : "Smit"
    },
    address : "Thakkarbapanagar",
    company : "Bacancy",
}

const person2 = { ...person1};
person2.name.middlename = "Vishw"; 


console.log(person1);
console.log(person2);


/*  ****    Exercise 5  ****  */

/*Build a function that:
splits string
removes short words (<4)
joins remaining words with -*/

function PrintShortName(a){
    let name = a.toLowerCase();
    let nameArray = name.split(/\s/);

    console.log(nameArray.filter((value)=>{
        return value.length > 4;
    }).join("-"));
}

PrintShortName("PIPALAVA SMIT RAMNIKBHAI PATEL VISHW MAHESHBHAI OM SHAKTISINGH KOTAWALA");