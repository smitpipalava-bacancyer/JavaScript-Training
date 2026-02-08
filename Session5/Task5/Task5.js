function downloadFile(url , callback){
    setTimeout(()=>{
        console.log(`Download complete : ${url}`)
        callback();
    },3000);

}

function print(){
    console.log("HELLO FROM JAVASCRIPT TRAINING!!!");
}

downloadFile("https://SMIT.pdf" ,print);