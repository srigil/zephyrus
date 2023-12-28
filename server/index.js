const express = require('express');
const cors=require('cors')
var app=express()
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

var route=require('./router/routes')
app.use("/route",route)

app.listen(9000,()=>{
    console.log("Server at http://localhost:9000")
})