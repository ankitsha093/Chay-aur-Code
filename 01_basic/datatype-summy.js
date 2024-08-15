let ankit = null;
// console.log(typeof(ankit))
// will show type object

// let aman = Symbol(123)
// let ankit2 = Symbol(123)

// console.log(aman)
// console.log(ankit2)



// -------------------


// Memory 
// Stack (Primitive) and Heap (non-primitive )


// data type primitive goes to Stack Memory and no pimitive goes to Heap  Memory
// stack will give you a copy of data but Heap will give a reference data (Example :v)


 let user = {
    name: "ankit",
    email: "ank@gmail.com"
}

let user2 = user;
// it will show ankit name as it is given in user1


user2.name = "aman";


// it will chagne original object because it is a reference data (not a copy of original data)

console.log(user.name);
console.log(user2.name);

// in both condition it will "aman" because it has change the original value

