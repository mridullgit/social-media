const route = require('express').Router()
const {post} = require('../../db/model')
const {createnewPost,showAllpost} = require('../../controllers/posts')
route.get('/' , async(req,res)=>{
    const posts7 = await showAllpost()
    res.status(200).send(posts7)
})
route.post('/',async(req,res)=>{
    const userID = req.body.userID
    const title = req.body.title
    const body = req.body.body
    if((!userID)||(!title)||(!body)){
        res.status(404).send({
            error : 'Need UserId , Body , Title to create post'
        })
    }
    const post1  = await createnewPost(userID,title,body)
    res.status(201).send(post1)  
})
module.exports = {
    postRoute : route
}