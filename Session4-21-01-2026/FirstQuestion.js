/*      ****    Exercise - 1    ****         */
// Predict the output and explain the memory state.

const registry = {
    active: [{ id: 1, name: "Alpha" }],
    archived: []
};
function cloneAndModify(data) {
    // Goal: Create a copy so the original registry isn't changed 
    const copy = { ...data };
    copy.active.push({ id: 2, name: "Beta" });
    copy.active[0].name = "Gamma";
    copy.version = 2.0;
    return copy;
}
const newRegistry = cloneAndModify(registry);
console.log(registry.active.length); // ? 
console.log(registry.active[0].name); // ? 
console.log(registry.version); // ? 

/*
output
2
Gamma
undefined

Reason :- in cloneAndModify function we create an shallow copy of the data and in data we pass the registry.
now in the registry there is an array of object and in cloneAndModify function we push another object in copy (shallow copy of data)
and also try to change the first object's name property but it is a shallow copy it points to the original data's memory location for objects and nested objects.
so it also change the name propertu in registry too... also we added one more property in copy (shallow copy of data) but it can't be reflect to the original registry becuase it is primitve value and it will not point to the original object and it can't also added.

*/