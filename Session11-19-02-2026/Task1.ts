// 1. Create a generic function called wrapInArray that accepts any value and returns it inside an array.
// 2.  Create a generic interface PaginatedResponse<T>  with properties: 
// 3. items: T[]
// 4. total: number

// 1.
function wrapInArray<T>(element : T) : T[]{
    return [element];
}

console.log(wrapInArray<string>("20"));

// 2. 
interface PaginatedResponse<T>{
    items : T[],
    total : number
}

const obj1 : PaginatedResponse<string> ={ 
    items: ["pepsi" , "coke"],
    total : 30
}

