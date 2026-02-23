// 1. Create a type ReadOnlyUser where all properties are readonly.
// 2. Create a type StringifiedUser where all properties become string.
// 3. Create a type OptionalAndNullableUser where all properties are optional and nullable.

// 1.
type User = {
    id : number,
    name : string,
    email : string,
    isActive : boolean,
    isPass : boolean
}

// 2.

type ReadOnlyUser =  Readonly<User>;

// manually

// type ReadOnlyUser2 = {
//     readonly [K in keyof User] : User[K];
// }

// 3.

type OptionalAndNullableUser = {
    [K in keyof User] ?: User[K] | null; 
}