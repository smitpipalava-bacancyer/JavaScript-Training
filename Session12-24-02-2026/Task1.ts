// 1. Create a type IsNumber<T> .
// 2. Create a type ExtractEmail<T> that extracts email type if present.

// 1.
type IsNumber<T> = T extends number ? true : false;

type FirstNumber = IsNumber<10>;
type SecondNumber = IsNumber<"10">;

// 2. 
interface User {
    id: string
    name: string
    email: string
    role: "ADMIN" | "CUSTOMER"
    isActive: boolean
}

type ExtractEmail<T> = T extends { email: infer U } ? U : never;

const obj : User = {
    id: "101",
    name: "SMIT",
    email: "ABC@gmail.com",
    role: "ADMIN" ,
    isActive: true
}

type checkTypeForEmail = ExtractEmail<typeof obj>;