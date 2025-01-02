const route = require('express').Router()
const{getUserById,getUserByUserName} = require('../../controllers/users');
const  createAnonUser = require('../../controllers/users').createAnonUser
const { user } = require('../../db/model');

route.get('/:id',async(req,res)=>{
    let users;
    if(isNaN(parseInt(req.params.id))){
        users = getUserByUserName(req.params.id)
    }else{
        users = getUserById(req.params.id)
    }
    if(users){
        res.status(200).send(users)
    }else{
        res.status(502).send({
            error : 'Could not find Username or Id'
        }) 
    }
})
route.post('/',async(req,res)=>{
    let users = await createAnonUser()
    res.status(201).send(users)
})
module.exports = {
    userRoute : route
}
