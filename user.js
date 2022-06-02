


const mongoose=require('mongoose')



const Personschema=new mongoose.Schema({

name:String,
age:Number,
favoriteFoods:[
    {
    type:String
    }
]


})

// const myUser = mongoose.model('user',Personschema);
// exports.module = myUser;

const Person= mongoose.model('person', Personschema)
module.exports=Person