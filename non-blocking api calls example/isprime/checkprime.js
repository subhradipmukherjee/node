const express = require('express')
const app = express()

app.get('/:id',async(req,res)=>{
    const startTime = new Date()
    const num = parseInt(req.params.id)
    //const result = await isPrime(num)
    setTimeout(()=>{
        const endTime = new Date()
        let time = endTime.getTime() - startTime.getTime() 
        res.json({
            num,
            time:time+"ms"
        })
    },10000)
    
    // let time = endTime.getTime() - startTime.getTime() 
    // res.json({
    //     result,
    //     time: time+"ms",
    //     num
    // })
   // res.send(result+" "+time+"ms"+" "+num)
})

const isPrime = number => {
    return new Promise(resolve => {
      let isPrime = true
      console.log("inside promise")
      for (let i = 3; i < number; i++) {
        if (number % i === 0) {
          isPrime = false
          break
        }
      }
      console.log("promise end")
      resolve(isPrime)
    })
  }
  

  async function test(num){
    console.log("inside test")
    const res = await isPrime(num)
    console.log(res)
  }

  k = 1000000016531
  test(67)
  console.log("hi")
// app.listen(3000,()=>{
//     console.log("listening on port 3000")
// })