const array=[1,2,3,4,5,6]
const array2=[7,8,9,10]
//const newarray=array.concat(array2)
//
//const newarray=[...array,...array2]
//console.log(newarray)


another_array=[1,2,3,[4,5,6],7,[8,9,10]]
const an1=another_array.flat(Infinity)
console.log(an1)
console.log(Array.isArray("aaref"))
console.log(Array.from("aaref"))