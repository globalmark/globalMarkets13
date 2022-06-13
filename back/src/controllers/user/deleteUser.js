const userSchema = require('../../models/user');

const deleteUser = (req, res) => {
    const { dni } = req.params;

    userSchema.deleteOne({ dni: dni })

        .then((data) => {
            res.json(data);//responde con los datos del usuario creado     
        })
        .catch((err) => {
            res.json({ message: err });
        });
}
module.exports = deleteUser;