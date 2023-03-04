//creating our server:
const express=require('express')
const connectDB = require('./connectDB')
const router = require('./routes')
const app=express()
const port=7500
app.use(express.json())
connectDB()
app.use('/',router)
app.listen(port, console.log(`server is running on port: ${port}`))