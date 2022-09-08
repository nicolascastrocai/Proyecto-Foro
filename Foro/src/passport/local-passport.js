
const { model } = require('mongoose')
const passport=require('passport')
const usuarios = require('../models/usuarios')
const LocalStrategy=require('passport-local').Strategy

const User=require('../models/usuarios')

passport.serializeUser((usuario,done)=>{
    done(null,usuario.id)
})

passport.deserializeUser((id,done)=>{
    User.findById(id)
        .then(usuarios=>{
            done(null,usuarios)
        })
})



passport.use('local-/register',new LocalStrategy({
    usernameField:'usuario',
    passwordField:'contraseña',
    passReqToCallback:true
},(req,usuario,contraseña,done)=>{
     const user=User.findOne({usuario:usuario},(err,user)=>{
        if (user) {
            done(null,false,req.flash('mensaje', 'El Usuario ya esta registrado'))
        }
        else{
            const usuarios=new User()
            usuarios.usuario=usuario
            usuarios.contraseña=contraseña
            usuarios.save()
                .then(usuario=>{
                    done(null,usuario)
                })
        }
    })
}))


passport.use('local-/login',new LocalStrategy({
    usernameField:'usuarios',
    passwordField:'contraseña',
    passReqToCallback:true
},(req,usuarios,contraseña,done)=>{
    const user=User.findOne({usuario:usuarios},(err,user)=>{
        if (!user) {
            done(null,false,req.flash('mensaje2', 'El Usuario no esta registrado'))
        }
        else{
            User.findOne({contraseña:contraseña},(err,go)=>{
                if (!go) {
                    done(null,false,req.flash('mensaje3', 'contraseña incorrecta '))
                }

                else if(go){
                    
                    done(null,user)
                }
            })
        }
    })
}))

passport.serializeUser((usuario,done)=>{
    done(null,usuario.id)
})

passport.deserializeUser((id,done)=>{
    User.findById(id)
        .then(usuarios=>{
            done(null,usuarios)
        })
})


