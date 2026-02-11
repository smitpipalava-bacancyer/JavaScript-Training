// 1. Create reusable aliases for union and intersection types
// 2. Refactor earlier assignments to use these aliases
// 3. Observe how readability improves
// 4. Create a type alias for string | number
// 5. Use it in two variables 
// 6. How does this improve readability?

// 1. Create reusable aliases for union and intersection types
type Person = {
    name : string,
    age : number
}

type Employee ={
    Eid : number
}

type OfficeStaff = Employee & Person ;
type SimplePerson = Employee | Person ;

// 3. Observe how readability improves
// type aliases improves readability by avoid repeating same types everywhere in the code and using type alias whereever we want to assign a type to variable

// 4. Create a type alias for string | number

type ID = string | number;

// 5. Use it in two variables 

let FirstId : ID = "101";
let SecondId : ID = 101;

