const {Router}=require('express')
const router=Router()
const passport=require('passport')
const bp = require('body-parser')
require('../passport/local-passport')

const User=require('../models/usuarios')
const Contenido=require('../models/contenido')
const Respuesta=require('../models/respuesta')
const { json, text } = require('body-parser')
const respuesta = require('../models/respuesta')






router.get('/',(req,res)=>{
    res.render('register')
})


router.get('/index', async(req,res)=>{
    const datos= await Contenido.find()
    res.render('index',{datos})
 })

router.get('/register',(req,res)=>{
    res.render('register')
})

router.post('/register',passport.authenticate('local-/register',{
    successRedirect:'/login',
    failureRedirect:'/register',
    passReqToCallback:true
}))

router.get('/login',(req,res)=>{
    res.render('login')
})


router.post('/login',passport.authenticate('local-/login',{
    successRedirect:'/perfil',
    failureRedirect:'/login',
    passReqToCallback:true
}))




router.get('/perfil',(req,res)=>{
   res.render('perfil')
    
})

router.post('/perfil',(req,res)=>{
    let informacion=req.body
    
    publicacion=new Contenido({
    plataforma:informacion.plataforma,
    juego:informacion.nombreJuego,
    contenido:informacion.palabrasClaves,
    informacion:informacion.contenidoInformacion,
    usuario:informacion.usuario,
    clave:informacion.clave
    })
    publicacion.save()
        .then(savPublicacion=>{
            savPublicacion
        })
        res.redirect('/index')
})


router.get('/indexx', async(req,res)=>{
    const datos= await Contenido.find()
     res.send(JSON.stringify(datos))
 })

 


router.get('/respuestas',async(req,res)=>{
    res.render('respuestas')
    
})

router.get('/respuestas/:id',async (req,res)=>{
    const dato= await Contenido.findById(req.params.id)
    console.log(dato);
    res.render('respuestas',{dato})
})

router.post('/respuestas/:id',async (req,res)=>{
    let informacion=req.body
    
    const respuesta=new Respuesta({
    respuesta:informacion.respuesta,
    info:informacion.info
    
    })
    respuesta.save()
        .then(savPublicacion=>{
            console.log(savPublicacion);
        })

        res.redirect('/index')
})

router.get('/hola',async(req,res)=>{
    const datos= await Respuesta.find()
    res.send(JSON.stringify(datos))
    
})



router.get('/cerrar',(req,res)=>{
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/login');
      });
})


function isAuthenticated(req,res,next) {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('login')
}






module.exports = router;