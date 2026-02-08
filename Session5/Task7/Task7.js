function tossCoin(){
    let Randomnumber = Math.random().toFixed(2);
    // console.log(Randomnumber);
    return new Promise((resolve,reject)=>{
        if(Randomnumber > 0.5){
            resolve("Heads");
        }else{
            reject("Tails")
        }
    })
};

let response = tossCoin()
.then(result => console.log(result))
.catch(err => console.log(err));