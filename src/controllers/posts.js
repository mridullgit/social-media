
const {post} = require('../db/model')
const user4 = require('../db/model').user
async function createnewPost(userId,title,body){
    const Post = post.create({
        title,
        body,
        userId
    })
    return Post
}

async function showAllpost(query){
    const posts = await post.findAll({
        include : [user4]
    })
    return posts
}
// createnewPost(1,"Graph Theory","It is a set of vertices and edges")

module.exports = {
    createnewPost ,
    showAllpost
}
// async function tasks(){
// const postt = await showAllpost()
// for(let p of postt){
//     console.log(p.user.username);
// }
// }
// async function tasks(){
//     const post1 = await createnewPost(2,"HTTP 400","This is basically an error message from the web server telling you that the application you are using (e.g., your web browser) accessed it incorrectly or that the request was somehow corrupted on the way.")
//     console.log(post1);
// }
// tasks()