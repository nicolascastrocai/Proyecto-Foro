const mongoose=require('mongoose')
const {Schema}=mongoose

const userSchema= new Schema({
    nombre:String,
    usuario:String,
    contraseña:String,
    mail:String
})

module.exports=mongoose.model('usuario',userSchema)