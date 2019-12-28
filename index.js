var express = require('express')
var bodyParser = require('body-parser')
var Mongo=require('./mongo/mongo_function')
var mongo_function=new Mongo()
var app = express()

app.use(bodyParser.urlencoded({ extended :true }))
app.use(bodyParser.json())

app.post('/register',(req,res)=>{
  res.setHeader('Access-Control-Allow-Origin','*')
  mongo_function.insert(req.body.name,req.body.email,(response)=>{
    res.json(response)
  })
})

app.get('/get_user',(req,res)=>{
  res.setHeader('Access-Control-Allow-Origin','*')
  mongo_function.read((response)=>{
    res.json(response)
  })
})



app.listen(8000,()=>console.log('App is running on port 8000'))