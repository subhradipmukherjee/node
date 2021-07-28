const download = function(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("download complete")
            resolve()
        },3000)
    })
}

let downloadpromise = download();

setTimeout(()=>{
  downloadpromise.then(()=>{
      console.log("downloaded object is used")
  })
},5000)


/* 
This type of usage of promise is called deffered promise. Here in download function which returns a promise, the promise is resolved.
But the then() call is not made immediately instead it is made later.
Ideally whenever the resolve is called, the corresponding .then() function is called which contains the callback function which is pushed into 
event queue and later the eventloop pushes that into call stack when call stack becomes empty.
In this case when resolved is called there is no .then() function to execute so javascript changes the state of the promise from pending
to resolved and moves on. later when the .then() is called it checks that since promised is already resolved it pushes the callback inside then()
into the eventqueue and event loop pushes it to call stack.


This deffered promise is required in scenarios where we for eg. we dont have the value of a variable to be used in the callback function inside .then()
during calling the promise. so we use the .then() later in our code when we get that variable value.  
*/