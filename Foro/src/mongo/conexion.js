const mongoose=require('mongoose')

const URL='mongodb://0.0.0.0:27017/login'

mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(_ => {
        console.log('base conectada');
    })
    .catch(err => {
        console.log(err);
    })
