// immidetaly invoke function expressions

//normal function
// function chai(){
//     console.log(`this is chai`)
// }
// chai()
//iife function

(function chai(name){
    //named iife function
    console.log(`chair or code ${name}`)
})("aaref");
//unnamed iife function
( (name)=>{
    console.log(`what is your Name,${name}`)
})("hamza")

