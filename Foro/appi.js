const express = require('express')
const cors=require('cors')
const session = require('express-session')
const flash=require('connect-flash')
const app = express()
const port = 3000
const bp = require('body-parser')
const path = require("path")
const passport=require('passport')



//inicializacion
require('./src/mongo/conexion')
require('./src/passport/local-passport')



//configuracion
app.set('view engine', 'ejs')




//middleware
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(express.urlencoded({
    extended:true
}))
app.use(express.json({
    type:"*/*"
}))
app.use(cors())

app.use(express.urlencoded({extended:false}))
app.use(session({
  secret:'nicolas',
  resave:false,
  saveUninitialized:false
}))
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())

app.use((req,res,next)=>{
  app.locals.mensaje=req.flash('mensaje')
  app.locals.mensaje2=req.flash('mensaje2')
  app.locals.mensaje3=req.flash('mensaje3')
  app.locals.user=req.user||null
  next()
})

//rutas
app.use(require('./src/routes/index'))

//archivos estaticos
app.use(express.static('public'))
app.use(express.static('views'))








app.listen(port, () => {
  console.log(`Servidor funcionando correctamente ${port}`)
})