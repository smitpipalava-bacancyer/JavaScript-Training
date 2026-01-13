<<<<<<< HEAD
let num = document.getElementById("User_Num");
let button = document.getElementById("Button_Clicker");
let resultDiv = document.getElementById("result");

button.addEventListener("click", () => {

    let x = num.value;

    for (let i = 1; i <= x; i++) {
        let ptag = document.createElement("p");
        ptag.style.margin = "1rem";

        if ((i % 2) == 0) {
            ptag.innerHTML = `${ i } => EVEN`;
        } else {
            ptag.innerHTML = `${ i } => ODD`;
        }
        resultDiv.appendChild(ptag);
    }
=======
let num = document.getElementById("User_Num");
let button = document.getElementById("Button_Clicker");
let resultDiv = document.getElementById("result");

button.addEventListener("click", () => {

    let x = num.value;

    for (let i = 1; i <= x; i++) {
        let ptag = document.createElement("p");
        ptag.style.margin = "1rem";

        if ((i % 2) == 0) {
            ptag.innerHTML = `${ i } => EVEN`;
        } else {
            ptag.innerHTML = `${ i } => ODD`;
        }
        resultDiv.appendChild(ptag);
    }
>>>>>>> bd5c800 (Date : 13/01/2026 Session 2 => Assignment 3,4,5  uploaded)
})