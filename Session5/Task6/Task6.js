function step1(callback){
    setTimeout(()=>{
        console.log("step1");
        callback();
    },3000);

}

function step2(callback){
    setTimeout(()=>{
        console.log("step2");
        callback();
    },3000);
}

function step3(){
    setTimeout(()=>{
        console.log("step3");
        console.log("All Steps finished!!");
    },3000);
}

step1(()=> step2 (()=> step3()));
