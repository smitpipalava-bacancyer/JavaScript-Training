const saveButton = document.getElementById("saveButton");
const loadButton = document.getElementById("loadButton");
const DataFromLocal = document.getElementById("DataFromLocal");
const DataFromSession = document.getElementById("DataFromSession");
let UserText = document.getElementById("UserText");

saveButton.addEventListener("click",()=>{
    if(UserText.value == ""){
        alert("PLEASE ENTER THE DATA!!");
    }else{
        localStorage.setItem("LocalData" , UserText.value);
        sessionStorage.setItem("SessionData" , UserText.value)
    }
});

loadButton.addEventListener("click",()=>{
    DataFromLocal.innerText += localStorage.getItem("LocalData");
    DataFromSession.innerText += sessionStorage.getItem("SessionData");
})