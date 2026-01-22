let original = {
    Title : "Question - 4",
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
    loginFun : function(){
        console.log("USER HAS BEEN LOGGED!!");  
    }
}


function masterClone(obj){
    if(obj == null || typeof obj !== "object"){
        return obj;
    }

    // handle array
    if(Array.isArray(obj)){
        let newArr = [];

        for (const element of obj) {
            newArr.push(masterClone(element));
        }
        return newArr;
    }

    // handle object
    let newObj = {};
    for (let key in obj) {
        newObj[key] = masterClone(obj[key]);
    }
    return newObj;
}

let CloneObject = masterClone(original);

console.log(original);
CloneObject.Title = "Sucessfull Coded";
CloneObject.Details.FullName.FirstName="Vishv";
CloneObject.Details.FullName.MiddleName="Mansukhbhai";
CloneObject.Details.FullName.LastName="Patel";
console.log("SO THE CLONE OBJECT IS BEFORE:",CloneObject);

console.log(CloneObject.loginFun == original.loginFun);