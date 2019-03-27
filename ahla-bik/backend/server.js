const express=require('express')
const bodyParser=require('body-parser')
const{ObjectID,MongoClient}=require('mongodb')
const assert=require('assert')

const app=express()
app.use(bodyParser.json())
const MongoUrl='mongodb://localhost:27017'
const database='ahlaahla'

MongoClient.connect(MongoUrl,{useNewUrlParser:true},(err,client)=>{
    assert.equal(null,err,'can not connect to database')
    const db=client.db(database)

//add newsletters subscriber
app.post('/contact',(req,res)=>{
    let newsub=req.body
    db.collection('newsletters').insertOne(newsub,(err,data)=>{
        if(err) res.send("Can't add subscriber")
        else res.send(data)
    })
})

//get newsletters subscriber
app.get('/get-contact',(req,res)=>{

    db.collection('newsletters').find().toArray((err,data)=>{
         if(err) res.send('can not get add subscriber')
        else res.send(data)
    })   
    })


})

app.listen(3002, err=>{
    if (err) console.log("Server error")
    else console.log("Server is running on port 3002")
})