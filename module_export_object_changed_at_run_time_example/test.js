

const index = require('./index')

index.sayhello("roop")
console.log(index)
console.log("tata")
setTimeout(()=>{
   const index2 =  require('./index') 
   console.log("hi")
   console.log(index2)
   console.log(index === index2)
},1000)


/* 
The above example shows that the module.exports object
 can be modified at run time after it has been exported.

 Here the sayhello fucntion from index.js has been exported, and a 
 timeout is used that adds a new property to module.exports object of index.js after 1 second.
In test.js we require the index module and log it then again require it after a timeout of
2 seconds and log it. in the 2nd log we can see the extra property which was added
in module.exports of index.js

Another point here is, after the 1st require command, the index.js runs 
and whatever needs to be exported is stored in memory.
so when we require index.js 2nd time while test.js is still running, 
it does not require the index.js from scratch, its fetches the export from memory.



*/