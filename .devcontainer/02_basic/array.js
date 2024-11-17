const array1=[0,1,2,3,4,5,"aaref "]
console.log(array1)
console.log(typeof array1)
array1.push(6)
console.log("A push methode",array1)
array1.pop()
console.log("A pop methode", array1)

const array2=new Array(1,2,3)
console.log(array2)
array2.unshift(0)
console.log(`this methode is unshift ${array2}`)
array2.shift()
console.log(`this methode is shift ${array2}`)

const array3=new Array("hamza","shaikh","aaref" ,"rf","sk")
console.log(array3)

array3.slice(0,3)
console.log(array3)
console.log("slice mthode convort arry in string", array3)

const splic=array3.splice(0,3)
console.log("splice methode",splic)
console.log("orignal array",array3)


