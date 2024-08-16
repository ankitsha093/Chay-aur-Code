const use1 = [2,5,8,10,5,6,7,81,15,69,10]
// const user2 = use1.slice(0,8);
// const user2 = use1.splice(2,4);
use1.push(4,5);

const user3 = use1
user3.push(45)
// console.log(user3);

user3.pop() //remove last value

user3.unshift(15) //add element at start of an object
user3.shift() //remove an element from the start of an array


const newArr = use1.join(); //jpin the array in a string

console.log(newArr);
