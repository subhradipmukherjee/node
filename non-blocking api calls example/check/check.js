const express = require('express')
const app = express()
const fetch = require("node-fetch") //node-fetch is a library used to make http request in nodejs.


app.get("/fast", (req, res) => {
    res.send("I am unblocked now")
})


app.get("/num", async (req, res) => {
    let num = parseInt(req.query.n);
    try{
        const result = await fetch("http://localhost:3000/"+num) //fetch returns a promise
        const resJson = await result.json()
        //console.log(resJson)
        res.json(resJson)
    }catch(e)
    {
    console.log(e)
    }
})



  
app.listen(4000,()=>{
    console.log("listening on port 4000")
})