let role = document.getElementById("User_Role");
let button = document.getElementById("Button_Clicker");
let resultDiv = document.getElementById("result");

button.addEventListener("click", () => {

    let x = role.value.toUpperCase();

    switch (true){
        case x === "ADMIN":
            resultDiv.innerHTML = "Full Access";
            resultDiv.style.color = "green";
            break;
        case x === "USER":
            resultDiv.innerHTML = "Limited access";
            resultDiv.style.color = "#673AB7";
            break;
        case x === "MANAGER":
            resultDiv.innerHTML = "Moderate Access";
            resultDiv.style.color = "orange";
            break;
        default : 
            resultDiv.innerHTML = "Invalid role"
            resultDiv.style.color = "red";
            break;
    }
})