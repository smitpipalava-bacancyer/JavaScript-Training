/*  ****    Exercise 1  ****  */
// Write a program to print numbers from 1 to 50 and show whether they are Even or Odd.


const num = 50;

for(let i=1;i<=num;i++){
    if(i%2==0){
        console.log(`${i} : Even`);
    }else{
        console.log(`${i} : ODD`);
    }
}


/*  ****    Exercise 2  ****  */
// Create a function that takes a string and:
// converts it to lowercase
// splits by space
// joins using _


function takeName(a){
    let LowerName = a.toLowerCase().split(/\s/).join("-");
    
    console.log(LowerName);
}

takeName("SMIT PIPALAVA RAMNIKBHAI");



/*  ****    Exercise 3  ****  */
// Given an array of numbers, use map() to multiply each number by 3.


const arr = [10,20,30,50,70,20,6,90,108,55];

// first method
console.log(arr.map((value)=>{ return value *= 3}));

// second method
console.log(arr.map((value)=> value *= 3));


/*  ****    Exercise 4  ****  */
// Given an array of ages, filter only ages 18 and above.


const arr2 = [10,20,30,50,70,20,6,90,108,55];

console.log(arr.filter((value) => value > 18));
console.log(arr.filter((value) =>{ return  value > 18}));


/*  ****    Exercise 5  ****  */
// Create an object user with a method that prints
// "Hello, <name>" using this.


const person={
    name : "Pipalava Smit Ramnikbhai",
    printName : function(){
        console.log(`So the Student Name is : ${this.name}`);
    }
}

person.printName();