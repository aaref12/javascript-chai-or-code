// let number=[1,2,3,4,5]

// const newnum=number.reduce((acc,curntval)=>acc+curntval,0)

// console.log(newnum)


const shoppingCard=[
    {
        name:"mobile",
        price:2999
    },
    {
        name:"oneplus",
        price:8999
    },
    {
        name:"realmi",
        price:5999
    },
    {
        name:"vivo",
        price:4999
    },
    {
        name:"oppo",
        price:3999
    },
]
const totlaamount=shoppingCard.reduce((acc,curnval)=>
       
      acc+curnval.price,0)
console.log(totlaamount)