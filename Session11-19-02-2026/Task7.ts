// 1. Create a custom utility ReadonlyByKeys<T, K> that makes selected keys readonly.
// 2. Create a utility  NonNullableFields<T> that removes null and undefined from all properties.
// 3. Apply both to User and test different scenarios.

type User = {
    id: string | null
    name: string
    email: string | null
    role: "ADMIN" | "CUSTOMER"
    isActive: boolean
}

type ReadonlyByKeys<T,K extends keyof T> =  Readonly<Pick<T, K>> & Omit<T, K>;


type NonNullableFields<T> = {
    [K in keyof T]: NonNullable<T[K]>;
};


type FinalUser = ReadonlyByKeys<
    NonNullableFields<User>,
    "id"
>;