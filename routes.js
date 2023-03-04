const express=require('express')
const { findperson, addperson, editperson, deleteperson } = require('./controllers')
const router=express.Router()
router.get('/get',findperson)
router.post('/post',addperson)
router.put('/put/:id',editperson)
router.delete('/del/:id',deleteperson)

module.exports=router