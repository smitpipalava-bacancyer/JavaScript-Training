const button = document.getElementById("ButtonClicker");
let count = 0;
button.addEventListener("click",()=>{
    document.getElementById("counterPara").textContent = ++count;
})