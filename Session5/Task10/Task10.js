function simulateTask(name, delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`HELLO HERE IS THE ${name}`);
            resolve(name);     
        },delay)
    })
}

// Part A

async function runsequentially(){
    await simulateTask("Task 1", 1000)
    await simulateTask("Task 2", 1500)
    await simulateTask("Task 3", 2500)
}

// Part B

async function runParallely(){
    Promise.all([
        simulateTask("Task 4",3000),
        simulateTask("Task 5",3500),
        simulateTask("Task 6",4000)
    ])
}

async function runPrograms(){
    console.log("=== Sequential Execution ===");
    await runsequentially();
    console.log("=== Parallel Execution  ===");
    await runParallely();
}

runPrograms();