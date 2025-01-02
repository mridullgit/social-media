const express = require('express')
const app = express()
const {db} = require('./db/model')
const { FORCE } = require('sequelize/lib/index-hints')

const userRoute = require('./routes/users/index').userRoute
const postRoute = require('./routes/posts/index').postRoute
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// db.sync({force : true}).then(()=>{
db.sync().then(()=>{
    app.listen(5656,()=>{
        console.log("server started on http://localhost:5656");
    })
}).catch((err)=>{
    console.error(new Error('Couldnt start database'))
    console.error(err)
})
app.use('/api/user',userRoute)
app.use('/api/posts',postRoute)
app.use('/',express.static(__dirname+'/public'))