// Truty and Falsy Value 


// When we Assume that value would be true and false  example

const className = "five"

if(className){

    //in THis is case we assume that "classname have a true value"
console.log('we have class name');
}

else{
    console.log(`we don't have class`)
}


// Falsy Values Are = 

// false, 0, -0, BigInt, 0n, "0", null, undefined, Nan // These are falsy value (All value except these are Truthy Value)

// Surprise (truthy value) valie 

// "0",'false', ' ',[],{},function(){}  (All inside quotes will be truty value )


// check array is  empty

const users = []

if(users.length === 0){
    console.log("array is empty")
}

// check object is empty or not

const myObj = {
    user: "ankit",
    gender : "male"
};


console.log(Object.keys(myObj))
if(Object.keys(myObj).length===0){
    console.log(`object is Empty`)
}
else{
    console.log("array is not empty")
}


// false == 0, false == "", 0==""  // all these are true