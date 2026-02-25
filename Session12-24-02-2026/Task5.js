// 1. Create a constructor type for UserRepository .
// Create a callable type that formats User name.
var UserRepository = /** @class */ (function () {
    function UserRepository(users) {
        this.users = users;
    }
    UserRepository.prototype.getAll = function () {
        return this.users;
    };
    return UserRepository;
}());
function createRepository(ctor, users) {
    return new ctor(users);
}
var repo = createRepository(UserRepository, [
    { id: 1, name: "Smit" },
    { id: 2, name: "Jenish" }
]);
console.log(repo.getAll());
var formatter = function (user) { return user.name.toLowerCase(); };
var user = { id: 3, name: "meet" };
console.log(formatter(user));
// interface User {
//   id: number;
//   name: string;
// }
// // Constructor type
// interface UserRepositoryConstructor {
//   new (users: User[]): UserRepository;
// }
// class UserRepository {
//   constructor(private users: User[]) {}
//   getAll() {
//     return this.users;
//   }
// }
// function createRepository(
//   ctor: UserRepositoryConstructor,
//   users: User[]
// ) {
//   return new ctor(users);
// }
// const repo = createRepository(UserRepository, [
//   { id: 1, name: "Smit" },
//   { id: 2, name: "Jenish" }
// ]);
