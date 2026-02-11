// 1. Create a service class exposing only required public methods
// 2. Keep internal data private
// 3. Explain which members should be accessible and why
// 4. Create a class with public, private, and protected members
// 5. Try accessing them outside the class
// 6. Which members should be exposed and why?

// class service{
//     public User_name : string = "SMIT";
//     private User_balance : number = 1000;

//     public get_name():string{
//         return this.User_name;
//     }
//     public get_balance():number{
//         return this.User_balance;
//     }
// }

// const s1 = new service();

// console.log(s1.get_name());
// console.log(s1.get_balance());
// console.log(s1.User_name);
// console.log(s1.User_balance);

// 3. Explain which members should be accessible and why
// the public memeber only should be accessible because private variables only be accessible within the class out of the class it is not accessible. and protected variables are accessible within the class and in the child class in which they extended...

// 4. Create a class with public, private, and protected members

class person{
    public User_name : string = "SMIT";
    private User_Balance : number = 1000;
    protected User_id : number = 101;

    public get_balance(){
        return this.User_Balance;
    }
}

class childClass extends person{
    public get_id(){
        return this.User_id;
    }
}

const p1 = new person();
const c1 = new childClass();

// console.log(p1.get_balance());
// console.log(c1.get_id());
console.log(p1.User_name);
console.log(p1.User_Balance);
console.log(p1.User_id);

// 6. Which members should be exposed and why?
// only public member is accessible out of the class ... for private and protected it generates the error...