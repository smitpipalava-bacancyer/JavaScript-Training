// 1. Create a constructor type for UserRepository .
// Create a callable type that formats User name.

interface User {
  id: number;
  name: string;
}

// Constructor type
interface UserRepositoryConstructor {
  new (users: User[]): UserRepository;
}

class UserRepository {
  constructor(private users: User[]) {}

  getAll(): User[] {
    return this.users;
  }
}

function createRepository(
  ctor: UserRepositoryConstructor,
  users: User[]
) {
  return new ctor(users);
}

const repo = createRepository(UserRepository, [
  { id: 1, name: "Smit" },
  { id: 2, name: "Jenish" }
]);

console.log(repo.getAll());


// Callable type
interface NameFormatter {
  (user: User): string;
}

const formatter: NameFormatter = (user) => user.name.toLowerCase();
const user: User = { id: 3, name: "meet" };
console.log(formatter(user));