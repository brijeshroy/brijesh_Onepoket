/* 
Task 1 :-Create a simple Node.js server that listens on port 3000 and responds with "Hello, World!" for all incoming HTTP requests.
 You can use any library or framework of your choice.

*/ 
const express = require('express')

const app = express()


app.all("*",(req,res)=>   // using all as this will work for all sort of Request , GET,POST , PATCH etc as per question
{

   //  console.log(req.params)
    res.send("Hello world")
})

app.listen(3000,()=>{
    console.log("Activated on 3000")
})