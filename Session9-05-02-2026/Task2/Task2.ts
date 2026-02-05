let prices: number[] = [1,2,3,4,5,6,7,8,9];

function calculateTotal(arr : number[]) : number{
    let sum = arr.reduce((acc : number ,curr : number)=>{
        acc += curr;
        return acc;
    },0);

    return sum;
}

console.log(calculateTotal(prices));

function resultArray(a : number , b : number) : number | string{
    if((a+b) > 100){
        return "Greater then 100";
    }else{
        return a+b;
    }
}

console.log(resultArray(200,5));