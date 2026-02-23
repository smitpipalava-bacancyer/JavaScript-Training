// 1. Create a type UserPublicProfile without email and isActive . 
// 2.  Create a Record that maps user IDs (string) to User objects.

type User = {
    id: string
    name: string
    email: string
    role: "ADMIN" | "CUSTOMER"
    isActive: boolean
}

type UserPublicProfile = Omit<User , "email" | "isActive">

const p1 : UserPublicProfile = {
    id : "101",
    name : "SMIT",
    role : "ADMIN"
}

type UserRecord = Record<string, User>;