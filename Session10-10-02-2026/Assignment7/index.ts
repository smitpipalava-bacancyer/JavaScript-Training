// 1. Create an enum for payment states (INITIATED, SUCCESS, FAILED)
// 2. Write a function that accepts only this enum
// 3. Try passing an invalid value and observe the error
// 4. Why enums are better than magic strings?


// 1. Create an enum for payment states (INITIATED, SUCCESS, FAILED)

enum paymentStatus {
    INITIATED = "INITIATED",
    SUCCESS = "SUCCESS",
    FAILED = "FAILED"
}


// 2. Write a function that accepts only this enum

function printPaymentStatus(str : paymentStatus):void{
    switch(str){
        case paymentStatus.INITIATED :
            console.log("STARTED!!")
            break;
        case paymentStatus.SUCCESS:
            console.log("SUCCESS!");
            break;
        case paymentStatus.FAILED:
            console.log("FAILED!!");
            break;
    }
}


// 3. Try passing an invalid value and observe the error

printPaymentStatus(paymentStatus.BREAK);

// Error : Property 'BREAK' does not exist on type 'typeof paymentStatus'.


// 4. Why enums are better than magic strings?
// main reason is that it prevents the typo error also in IDE it recommanded the autocomplete.