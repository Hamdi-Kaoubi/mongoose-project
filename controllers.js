const userPrototype=require('./userModel')
exports.addperson= async(req,res)=>{
    try {
        const person=new userPrototype(req.body)
        await person.save()
        return res.status(200).send({msg:"person added",person})
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.findperson= async(req,res)=>{
    try {
        const person= await userPrototype.find()
        return res.status(200).send({msg:"person founded",person})
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.editperson= async(req,res)=>{
    try {
        const person=await userPrototype.findByIdAndUpdate(req.params.id,{$set:{...req.body}},{new:true})
        return res.status(200).send({msg:"person updated",person})
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.deleteperson=async(req,res)=>{
    try {
        await userPrototype.findByIdAndDelete(req.params.id)
        return  res.status(200).send({msg:"person deleted"})
    } catch (error) {
        return res.status(500).send(error)
    }
}
