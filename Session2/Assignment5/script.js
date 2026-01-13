let Price_num = document.getElementById("Price_Number");
let Coupon_Code = document.getElementById("Coupon_Code");
let button = document.getElementById("Button_Clicker");

// First Method
// button.addEventListener("click" ,()=>{
//     let a = Price_num.value;
//     let Coupon_Code_Value = Coupon_Code.value;

//     // console.log("SO THE RESULT IS :"+Coupon_Code_Value);
//     let first_half = Coupon_Code_Value.slice(0,4);
//     // console.log("SO THE FIRST HALF IS :"+first_half);

//     if(first_half === "SAVE"){
//         let b = Coupon_Code_Value.slice(4,6);

//         // console.log("SO THE DISCOUNTED PERCENTAGE IS :"+b);

//         let cut_amount =( a * b ) / 100;
//         let final_amount = a - cut_amount;
    
//         document.getElementById("result").innerHTML= final_amount;
//     }else{
//         document.getElementById("result").innerHTML= a;
//     }

// });

// Second Method
button.addEventListener("click", () => {
    let a = Price_num.value;
    let b = Coupon_Code.value;

    calculateResult(a, b);
});

function calculateResult(a , b){
    let first_half = b.slice(0,4);

    if(first_half === "SAVE"){
        let Discount_Percent = b.slice(4,6);

        // console.log("SO THE DISCOUNTED PERCENTAGE IS :"+b);

        let cut_amount =( a * Discount_Percent ) / 100;
        let final_amount = a - cut_amount;
    
        document.getElementById("result").innerHTML= final_amount;
    }else{
        document.getElementById("result").innerHTML= a;
    }
}