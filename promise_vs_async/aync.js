const promisecheck = ()=>{
    console.log(this)
    console.log("promise check")
    var d =8
    let t = 9 
    obj1.h = 99
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(5);
        },3000)
    })    
}

var obj1={
    h:"PP",
    j:"oo"
}
let obj2={
    hi:"P0P",
    ji:"opo"
}

const test = async() =>{
    try{
        console.log("inside test")
        const res = await promisecheck()
        console.log(res)
    }
    catch(er){
        console.log("this is error "+er)
    }
    finally{
        console.log("eecuting finally ")
    }
   
}

test()

console.log("hi")