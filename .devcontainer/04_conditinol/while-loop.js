 let arry=["spiderman","antman","thor"]
let i=0
// while(i<arry.length){
//     console.log(`${arry[i]}`)
//     i++
// }
// do{
// console.log(arry[i])
// i++
// }while(i<arry.length)
//for of looop
// let MyName="hello word";
// for(const Name of MyName){
//     console.log(`my name alphabate is ${Name}`)
// }
// for(const newarry of arry){
//     console.log(`new arry is ${newarry}`)
// }
let map=new Map()
map.set('IN',"INDIA")
map.set('US',"UNITED STATE OF AMERICA")
map.set('FR',"FRANCE")
for(const [key,value] of map){
    console.log(`${key} :- ${value}`)
}
let myobjt={
    name:"aaref",
    lastName:"hamza",
    address:"Nanded"
}
for(const [user] of myobjt){
    console.log(user)
}