

// Iffe (Immediately  Invoke Function)

(function count(){
    return console.log("counting")
})();


// how to write 2 Iffe Function at a same time (You have to end syntax with ; semi colon) otherwise it will create problem

(function count2(){
    return console.log("counting2")
})();

(function DB_connectionDone(connectionName){
// This is Called Named Iffe (Because this iffe have Name)

    console.log(`Dear ${connectionName}, Your Connectin Has Connected`)
})("Ankit");

((name)=>{
    console.log(`Your Name is ${name}`)
})("sonu")