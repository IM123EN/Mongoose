


const express = require('express');
const cors = require('cors');
const Mongoose = require('mongoose');
const Person=require("./user");
const res = require('express/lib/response');
const app= express();
app.use(express.json())
app.use(cors())

app.post("/users",async(req,res)=>{
    try {
       const newPerson= new Person(req.body)
       let result= await newPerson.save()
       res.status(200).send({person:result})

        
    } catch (error) {
        console.log(error);
    }
})
app.get("/users",async(req,res)=>{
    try {
        const users = await Person.find();
    res.status(200).send({users:users})




    } catch (error) {
        console.log(error);
        
    }
});

const url = `mongodb+srv://IMOU:imen04932298@cluster0.uylgc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
Mongoose.connect(url).then(()=>{
    app.listen(3000);
    console.log("Database Connected")
}).catch((error)=>console.log(error))











// app.listen(3000,()=>console.log("server ready"))

