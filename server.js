const express = require ('express')
const colors=require('colors')
// rest object
const app= express()

// rest api - url pattern
app.get('/',(req,res)=>{
    res.send({message:'welcome to ecommer app'})
})//for home 

// PORT
const PORT=8080

// run listen
app.listen(PORT,()=>{console.log(`server running ${PORT}`.bgCyan.white)});