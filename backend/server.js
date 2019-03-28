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

//-----------------------------------newsletters--------------------------------------------
//add newsletters subscriber
app.post('/add-contact',(req,res)=>{
    let newsub=req.body
    db.collection('newsletters').insertOne(newsub,(err,data)=>{
        if(err) res.send("Can't add subscriber")
        else res.send(data)
    })
})
//get newsletters subscriber
app.get('/get-contact',(req,res)=>{
    db.collection('newsletters').find().toArray((err,data)=>{
         if(err) res.send("Can't get subscribers")
        else res.send(data)
    })   
})

//-------------------------------------guest request------------------------------------------
//send request
app.post('/send-request',(req,res)=>{
    let newreq=req.body
    db.collection('requests').insertOne(newreq,(err,data)=>{
        if(err) res.send("Can't send request")
        else res.send(data)
    })
})
//get request
app.get('/get-request',(req,res)=>{
    db.collection('requests').find().toArray((err,data)=>{
         if(err) res.send("Can't get requests")
        else res.send(data)
    })   
})

//------------------------------------hosts---------------------------------------------
//add host
app.post('/add-host',(req,res)=>{
    let newhost=req.body
    db.collection('hosts').insertOne(newhost,(err,data)=>{
        if(err) res.send("Can't add host")
        else res.send(data)
    })
})
//get hosts
app.get('/get-host',(req,res)=>{
    db.collection('hosts').find().toArray((err,data)=>{
         if(err) res.send("Can't get hosts")
        else res.send(data)
    })   
})

 })

app.listen(3055, err=>{
    if (err) console.log("Server error")
    else console.log("Server is running on port 3055")
})