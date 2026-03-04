type PaymentState = 
| {Status : "PENDING"}
| {Status : "SUCCESS" , transactionId: string; amount: number}
| {Status : "FAILURE" , errorId : number , error : string}


function printData(state: PaymentState){
    switch(state.Status){
        case "PENDING" : 
            console.log("Payment is pending!!");
            break;
        case "SUCCESS" :
            console.log(`Payment successful. Transaction: ${state.transactionId}, Amount: ${state.amount}`);
            break;
        case "FAILURE" : 
            console.log(`Payment failed. Error Message: ${state.error}`);
            break;
        default :
            const _exhaustive : never = state;
            return _exhaustive;
    }
}