// 1. Create an Order using intersection ( & )
// 2. Create the same model using interfaces and extends
// 3. Remove one required property and observe the compiler error
// 4. Decide which approach feels clearer and why
// 5. Create two small object types and combine them using intersection ( & )
// 6. Create the same structure using interfaces and extends
// 7. Try removing a required property and observe the compiler error
// 8. Identify when intersection is better than union


// 1. Create an Order using intersection ( & )

type OrderDetails = {
    orderId : number,
    orderName : string
}

type DeliverDetails = {
    deliverId : number,
    deliverPartnerName : string
}

type Order = OrderDetails & DeliverDetails;


// 2. Create the same model using interfaces and extends

interface OrderDetailsI {
    orderIdI : number,
    orderNameI : string
}

interface DeliverDetailsI{
    deliverIdI : number,
    deliverPartnerNameI : string
}

interface OrderI extends OrderDetailsI , DeliverDetailsI {};

// 3. Remove one required property and observe the compiler error
const firstOrder : Order = {
    orderId : 101,
    orderName : "SMIT PIPALVA",
    deliverId : 101
}

const firstOrderI : OrderI ={
    orderIdI : 101,
    orderNameI : "SMIT PIPALAVA",
    deliverIdI : 101
}

// Observation : when i create both object then i get same error which is Property 'deliverPartnerName' is missing in type '{ orderId: number; orderName: string; deliverId: number; }' but required in type 'DeliverDetails'

// 4. Decide which approach feels clearer and why
// i think type is the best approach for it because type can be used for variable also whereas interface is just used for object so  if we want to go for the object then interface is the best option...

// 5. Create two small object types and combine them using intersection ( & )

type person = { 
    Name : string,
    age : number
}

type employee = {
    EId : number,
}

type CompanyEmployee = person & employee;

// 6. Create the same structure using interfaces and extends

interface personI {
    NameI : string,
    ageI : number
}

interface employeeI {
    EId : number
}

interface CompanyEmployeeI extends personI , employeeI {};

// 7. Try removing a required property and observe the compiler error

const E1 : CompanyEmployee ={
    Name : "SMIT",
    age : 20,
}

const E2 : CompanyEmployeeI = {
    NameI : "JENISH",
    ageI : 20
}

// 8. Identify when intersection is better than union
// so when we need both type or interface's properties in one type or interface respectively then we need intersection and in this situation intersection is better then union.