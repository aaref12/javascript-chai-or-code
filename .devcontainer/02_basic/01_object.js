const smb=Symbol("aaref")

const userName={
    name:"shaikh aaref hamza",
    age:23,
    [smb]:"hamza",
    email:"shaikhaaref@google.com",
    address:"qudwai Nagar Degloor Naka Nanded 431604",
}
userName["email"]="shaikhaaref"
//console.log(userName)
//Object.freeze(userName)
userName["email"]="shaikhaarefhamza@gmail.com"
//console.log(userName)
//console.log(smb)

userName.greeting=function(){
    console.log(`hello js, ${this.name}`)
}
console.log(userName.greeting())
