const First_User_Input = document.getElementById("First_User_Input");
const Second_User_Input = document.getElementById("Second_User_Input");
const Third_User_Input = document.getElementById("Third_User_Input");

const First_button = document.getElementById("First_Button_Clicker");
const Second_button = document.getElementById("Second_Button_Clicker");
const Third_Button = document.getElementById("Third_Button_Clicker");

// Exercise 3
First_button.addEventListener("click",()=>{
    const NumArr = First_User_Input.value.split(",");
    
    const FinalNumArr = NumArr.map((value,index)=>{
        return value = ` "$${value}" `;
    })    
    
    document.getElementById("resultOne").innerText = `[${FinalNumArr}]`;
})

// Exercise 4
Second_button.addEventListener("click",()=>{
    console.log("joo")
    const NumArr = Second_User_Input.value.split(",");

    console.log(NumArr);

    const FinalNumArr = NumArr.filter((value)=>{
        return value > 0 ;
    })    

    document.getElementById("resultSecond").innerText = `[${FinalNumArr}]`;
})

// Exercise 5
Third_Button.addEventListener("click",()=>{
    const NumArr = Third_User_Input.value.split(",");

    const FinalNumArr = NumArr.filter((value)=>{
        return value > 0 ;
    }).map((x)=>{
        return x = x * 2;
    })

    document.getElementById("resultThird").innerText = `[${FinalNumArr}]`;
})