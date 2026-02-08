let Clickbutton =  document.getElementById("ClickButton");

Clickbutton.addEventListener("click" , ()=>{
    document.getElementById("secret-message").textContent = "";
    document.getElementById("secret-message").textContent = "You found the secret message!";
})