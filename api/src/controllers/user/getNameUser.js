const userSchema = require('../../models/user');

const getNameUser = async (req, res) => {
    const name = req.params.name;
    try {
        if (name) {
            const user = await userSchema.findOne({ name });
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        }

    } catch (error) {
        console.log(error, 'error');
    }
}
module.exports = getNameUser;