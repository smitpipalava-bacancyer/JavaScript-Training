let num = document.getElementById("User_Num");
let button = document.getElementById("Button_Clicker");

// First Method
// button.addEventListener("click" ,()=>{
//     if(num.value == 0){
//         document.getElementById("result").innerHTML=" Zero";
//     }else if(num.value > 0){
//         document.getElementById("result").innerHTML=" Positive";
//     }else{
//         document.getElementById("result").innerHTML=" Negative";
//     }
// });

// Second Method
button.addEventListener("click" ,()=>{
    let x = num.value;

    switch(true){
        case x == 0 :
            document.getElementById("result").innerHTML=" Zero";
            break;
        case x > 0 : 
            document.getElementById("result").innerHTML=" Positive";
            break;
        case x < 0 :
            document.getElementById("result").innerHTML=" Negative";
            break;
    }
});