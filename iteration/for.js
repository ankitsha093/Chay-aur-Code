for (let index = 0; index < 10; index++) {
    // const element = index;
//  console.log(`outer loop ${index}`)   

 for (let i = 11; i<=20; i++){
    // console.log(i)
 }
}



// For Practice Print Table

// let table=1
// for(table;table<=10;table++){
//     let ulti=1
// for(ulti;ulti<=10;ulti++){


//     console.log(`${table} * ${ulti} = ${table*ulti}`)
// }
// }

// 

// Break and continue in for loop 


// for (let index = 0; index <= 20; index++) {

// if(index==5){
//     console.log(`Number 5 is Detected`)
//     // Break Use karte hi aage ke code ko stop kar deta hai
//     break
// }

//     console.log(index)
    
// }


for (let index1 = 0; index1 <= 20; index1++) {

    if(index1==5){
        console.log(`Number 5 is Detected`)
        // continue use krte hi vo ek bar loop escape kr dega (just for one time)
        continue
    }
    
        console.log(index1) //output will be (1,2,3,4,)6,7,8,9,10) //it will skip number 5 
        
    }
    
    