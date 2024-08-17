// HOw to merge an object to another object 

let arr1 = {
    name:"ankit",
    email: "ak@gmaail.com",

}
// HOw to merge an object to another object 

let arr2 = {
    name2:"ankit",
    email2: "ak@gmaail.com",
    
}

const arr3 = Object.assign(arr1,arr2) 

const arr5 = Object.assign({},arr1,arr2)
// console.log(arr5)

// another way to merge Object 

const arr4 = {...arr1,...arr2}
// console.log(arr4)


// how to get all key value of an Object 

const allKeys = Object.keys(arr3)
// console.log(allKeys)



// how to get all values of an Object 

let arr6 = Object.values(arr3)
// console.log(arr6)


let arr7 = Object.entries
console.log(arr7);
