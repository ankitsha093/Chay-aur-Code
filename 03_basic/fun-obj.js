function calCulateCarPrice(...prices){

    // ... Called REst Operator (Will Return a value in Array)
return prices
}

function calCulateCarPrice2(num1,num2,...prices){

    // ... Called REst Operator (Will Return a value in Array)
return prices 
}

// console.log(calCulateCarPrice(200,50,5,0,5,5,5,5,0,)); 
console.log(calCulateCarPrice2(200,50,5,0,5,5,5,5,0,)); 


const user={
    name:"ankit",
    email:"ankit#gmai.com"
}

const user2={
    name:"sjmit",
    email:"sumit#gmai.com"
}

const user3={
    name:"kk",
    email:"rohal#gmai.com"
}

function getEmail(emails){
    console.log(`this is the email id: ${emails.email} of ${emails.name}`);
}



getEmail(user3) //aurgument must be an object if i am using it as a object

// another way 
getEmail({name:"rahul",
    email:"rahul@gmail.com"
})

// same work with array 

const classNAME = ["ankit","rohan","aman","sonu","kk"]
const classSecB = ["Priya","Soniya","karan","maya","kk"]

function returnSecondName(sec){
    return sec[2]
}

console.log(returnSecondName(classNAME))
console.log(returnSecondName(classSecB))

// another way 

console.log(returnSecondName(["sd","asd","woking"]))