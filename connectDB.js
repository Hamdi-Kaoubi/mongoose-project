const mongoose=require('mongoose')
const connectDB=()=>{
    try {
        mongoose.connect('mongodb+srv://hamdikaoubi1994:douz123@cluster0.obazq0p.mongodb.net/?retryWrites=true&w=majority')
        console.log("database is connected")
    } catch (error) {
        console.log("database is not connected")
    }
}
module.exports=connectDB