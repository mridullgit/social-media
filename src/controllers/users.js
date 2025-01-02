const {user} = require("../db/model")
const { getrandomUsername} = require("../utils/username")
async function createAnonUser(){
    const user1 = await user.create({
        username : getrandomUsername()
    })
    return user1;
}
module.exports = {
    createAnonUser
}
