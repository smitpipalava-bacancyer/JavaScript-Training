let Price_num = document.getElementById("Price_Number");
let Quantity_num = document.getElementById("Quantity_Number");
let button = document.getElementById("Button_Clicker");

// First Method
// button.addEventListener("click" ,()=>{
//     let a = Price_num.value;
//     let b = Quantity_num.value;

//     let result = a * b;
//     document.getElementById("result").innerHTML= result;
// });

// Second Method
button.addEventListener("click", () => {
    let a = Price_num.value;
    let b = Quantity_num.value;

    calculateResult(a, b);
});

function calculateResult(a , b){
    let result = a * b;
    document.getElementById("result").innerHTML= result;
}