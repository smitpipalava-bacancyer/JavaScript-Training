// 1. Create a function updateField that takes:
// 2. object
// 3. key
// 4. value
// 5. Ensure the value type matches the key type.
// 6. Try assigning wrong type and observe the error.


const user = {
    name: "Smit",
    age: 19,
    isActive: true
};

function updateField<T  , K extends keyof T>(obj : T , key : K , value : T[K]) : T{
    obj[key] = value;
    return obj;
}

updateField(user, "name", "Rahul"); 
updateField(user, "age", 20);       
updateField(user, "isActive", false);

updateField(user, "age", "20");
updateField(user, "name", true);
