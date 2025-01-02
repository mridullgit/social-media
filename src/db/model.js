const sequelize = require('sequelize')
const db = new sequelize({
    dialect : 'mysql',
    database : 'cbsocialmediadb',
    username : 'cbsocialuser',
    password : 'cbsocialpass'
})
const COL_ID_DEF = {
    type : sequelize.DataTypes.INTEGER,
    autoIncrement : true,
    primaryKey : true
}
const COL_USERNAME_DEF = {
    type : sequelize.DataTypes.STRING(30),
    unique : true,
    allowNull : false
}
const COL_TITLE_DEF = {
    type : sequelize.DataTypes.STRING(30),
    allowNull : false
}
const user = db.define('user',{
    id : COL_ID_DEF,
    username : COL_USERNAME_DEF
})
const post = db.define('post',{
    id:COL_ID_DEF,
    title : COL_TITLE_DEF,
    body : {
        type : sequelize.DataTypes.TEXT,
        allowNull : false
    }
})
const comment = db.define('comment',{
    id : COL_ID_DEF,
    title : COL_TITLE_DEF,
    body : {
        type : sequelize.DataTypes.TEXT({length:'tiny'})
    }
})


user.hasMany(post)
post.belongsTo(user)
user.hasMany(comment)
comment.belongsTo(user)
post.hasMany(comment)
comment.belongsTo(post)


module.exports={
    db,user,post,comment
}