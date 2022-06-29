const userSchema = require('../../models/user');

const getNameUser = async (req, res) => {
    const Username = req.body.Username
    console.log(Username)
    try {
        const user = await userSchema.find({ Username:Username });
        console.log(user)
        res.json(user);
    } catch (error) {
        console.log(error, 'error');
    }
}
module.exports = getNameUser;