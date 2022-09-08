const mongoose=require('mongoose')
const {Schema}=mongoose

const userSchema= new Schema({
    respuesta:String,
    info:String
})

module.exports=mongoose.model('respuesta',userSchema)