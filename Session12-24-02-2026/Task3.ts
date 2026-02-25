// Assignment 3
// Create overloads for a function  format that:
// Accepts number → returns string
// Accepts Date → returns string


function format(value : number) : string;
function format(value : Date) : string;

function format(value : Date | number) : string {
    if(typeof value == "number"){
        return value.toFixed(2);
    }
    return value.toISOString();
}


console.log(format(123));
console.log(format(new Date()));