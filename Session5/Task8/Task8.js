function printNumber(){
    return new Promise((resolve,reject)=>{
        resolve(5);
    })
}

printNumber().then(data => data * 2)
.then(data => data + 20)
.then((data)=>{console.log(data)})