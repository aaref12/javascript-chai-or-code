function userName(userName ,undefine){
 if(userName===undefine){

    return console.log(`${userName},please enter valide Name`)
 }
return console.log(`${userName},is just login `)
}
userName()


const userid={
   userName:"shaikh aaref hamza",
   income:20000
}

function accessobjt(anyobj){
   return console.log(`userName is ${anyobj.userName} and income is ${anyobj.income}`)
}
//accessobjt(userid)
accessobjt({
   userName:"hamza",
   income:"200"
})

const newarry=[20,30,40,60]

function accessarry(anyarry){
return anyarry[3]
}
console.log(accessarry([30,80,80,70]))
