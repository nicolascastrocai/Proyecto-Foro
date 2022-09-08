const {Router}=require('express')
const router=Router()
const passport=require('passport')
const bp = require('body-parser')
require('../passport/local-passport')

const User=require('../models/usuarios')
const Contenido=require('../models/contenido')
const { json, text } = require('body-parser')






router.get('/',(req,res)=>{
    res.render('register')
})

router.get('/indexx', async(req,res)=>{
   const datos= await Contenido.find()
    res.send(JSON.stringify(datos))
})

router.get('/index', async(req,res)=>{
    res.render('index')
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
    informacion:informacion.contenidoInformacion
    })
    publicacion.save()
        .then(savPublicacion=>{
            savPublicacion
        })
        res.redirect('/index')

    
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