function sayhello(name){
    console.log("hello "+name)
}

console.log(module.exports)
module.exports.sayhello =  sayhello 
console.log(module.exports)

setTimeout(()=>{
  module.exports.prty = "wow"
},1000)