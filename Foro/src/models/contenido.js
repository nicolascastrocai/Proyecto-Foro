const mongoose=require('mongoose')
const {Schema}=mongoose

const userSchema= new Schema({
    plataforma:String,
    juego:String,
    contenido:String,
    informacion:String,
    usuario:String,
    clave:String
})

module.exports=mongoose.model('contenido',userSchema)