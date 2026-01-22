let original = {
    Details: {
        FullName: {
            FirstName: "SMIT",
            MiddleName: "Ramnikbhai",
            LastName: "Pipalava"
        }
    },
    nestedArray: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ],
    login(){
        console.log("USER HAS BEEN LOGGED!!");  
    }
}

function masterClone(obj) {
    let cloneObj = {};

    // for (const key in obj) {
    //     if (!Object.hasOwn(obj, key)) return;
        
    //     const element = obj[key];
    //     console.log(element);
    // }
}

masterClone(original);