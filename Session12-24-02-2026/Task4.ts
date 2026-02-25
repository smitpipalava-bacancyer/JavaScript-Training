// 1. Create abstract class Service<T> with abstract method execute()
// 2. Extend it with UserService 
interface User {
    id?: string
    name: string
    email: string
    role: "ADMIN" | "CUSTOMER"
    isActive: boolean
}

abstract class Service<T> {
    abstract execute(): T

}

class UserService extends Service<User> {
    execute(): User {
        return {
            name: "Alex",
            email: "alex@test.com",
            role: "ADMIN",
            isActive: true
        }
    }
}

const c1 = new UserService();

console.log(c1.execute());