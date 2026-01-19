const User_Input = document.getElementById("User_Input");
const button = document.getElementById("Button_Clicker");

// First attempt
// button.addEventListener("click",()=>{
//     const Lower_User_Input = User_Input.value.toLowerCase();

//     console.log(Lower_User_Input);

//     const words = Lower_User_Input.split(" ");

    
//     const final_word = words.join("-");
    
//     document.getElementById("result").innerText = final_word;
// })


// second attempt
// button.addEventListener("click",()=>{
//     const Lower_User_Input = User_Input.value.toLowerCase();

//     const words = Lower_User_Input.split(" ").join("-");
    
//     document.getElementById("result").innerText = words;
// })

// third attempt
button.addEventListener("click",()=>{
    const Lower_User_Input = User_Input.value.toLowerCase().split(" ").join("-");

    // const words = Lower_User_Input;
    
    document.getElementById("result").innerText = Lower_User_Input;
})