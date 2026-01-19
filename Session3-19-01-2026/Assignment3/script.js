const User_Input = document.getElementById("User_Input");
const button = document.getElementById("Button_Clicker");


// Exercise 3
button.addEventListener("click",()=>{
    const NumArr = User_Input.value.split(",");
    
    const FinalNumArr = NumArr.reduce((acc,curr)=>{
        return acc *= parseInt(curr);
    },0)    

    
    document.getElementById("result").innerText = `[${FinalNumArr}]`;
})
