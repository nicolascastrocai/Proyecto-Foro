const mongoose=require('mongoose')

const URL='mongodb://ugytyma8sbvm5o0fczfq:pDLPqJTybcNeTOsEpKVc@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/bxedkypuudnngx1?replicaSet=rs0'

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
