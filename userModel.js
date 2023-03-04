const mongoose=require('mongoose')
const userPrototype= new mongoose.Schema({
    name:{type:String,required:true},
    age:Number,
    favouriteFoods:Array
})

module.exports=mongoose.model('person',userPrototype)