/*Assignment 2: any vs unknown
1. Create a function that accepts any and performs operations without checks
2. Create the same function using unknown and add proper type guards
3. Compare the compiler behavior and runtime safety
4. Create one variable using any
5. Create another variable using unknown
6. Try calling methods directly on both
7. Which one forces you to write safer code?
*/

// 1. Create a function that accepts any and performs operations without checks
function Operation(RollNo : any){
    console.log(++RollNo);
}

Operation("SMIT");

// 2. Create the same function using unknown and add proper type guards
function Operation1(RollNo : unknown):void{
    if(typeof RollNo == "number"){
        console.log(++RollNo);
    }
    console.log(`Can't make the operation`);
} 

Operation1("10");

// 4. Create one variable using any
let anyVariable : any = 10;

Operation(anyVariable);

anyVariable = "SMIT";

// 5. Create another variable using unknown
let unknownVariable : unknown = 10;

// 6. Try calling methods directly on both
Operation(anyVariable);
Operation(unknownVariable);

// 7. Which one forces you to write safer code?
// unknown forces safer code because we must have to check first type and any disables type safety completely.
