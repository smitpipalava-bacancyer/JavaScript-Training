function wait(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`${ms/1000} Seconds passed!!`);
        },ms);
    })
}

wait(5000)
.then(data => console.log(data));