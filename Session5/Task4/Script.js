const toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click",()=>{
    document.getElementById("container").classList.toggle("active");
})